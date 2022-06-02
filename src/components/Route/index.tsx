import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import React, { lazy, Suspense } from "react";
import pageRoutes from "../../../config/routes";
import Container from "@/components/Layout/Content";
import Loading from "../Loading";

const getImportComponent = (component: any) =>
	component &&
	React.createElement(
		lazy(() => import(/* @vite-ignore */ `/src/${component}`))
	);

const routerMap = (routes: PageRoute[]): any => {
	const r = routes.map((item: PageRoute, index: number) => {
		const {
			routes: childRoutes,
			redirect,
			path,
			component,
			layout = true,
			name,
		} = item;

		if (redirect)
			return (
				<Route
					key={name || `${name}-${index}`}
					path={path}
					element={<Navigate replace to={redirect} />}
				/>
			);

		return (
			<Route
				path={path}
				key={name || `${name}-${index}`}
				element={
					<Suspense fallback={<Loading />}>
						{layout ? (
							<Container
								children={getImportComponent(component) as any}
							/>
						) : (
							getImportComponent(component)
						)}
					</Suspense>
				}
			>
				{childRoutes && !!childRoutes.length && (
					<Route path={path} key={name}>
						{routerMap(childRoutes)}
					</Route>
				)}
			</Route>
		);
	});
	return r;
};

const PageRoute: React.FC = () => {
	return (
		<Router>
			<Routes>{routerMap(pageRoutes)}</Routes>
		</Router>
	);
};

export default PageRoute;
