import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import pageRoutes from "../../../config/routes";
import Container from "../Layout/Content";
import Loading from "../Loading";

const routerMap = (routes: PageRoute[]) => {
	return (
		<Routes>
			{routes.map((item: PageRoute, index: number) => {
				if (item.routes && !!item.routes.length)
					return routerMap(item.routes);

				if (item.redirect)
					return (
						<Route
							key={item.path}
							path={item.path}
							element={<Navigate replace to={item.redirect} />}
						/>
					);
				return (
					<Route
						path={item.path}
						key={item.path || index}
						element={
							<Suspense fallback={<Loading />}>
								<Container
									children={
										item.component &&
										React.createElement(
											lazy(
												() =>
													import(
														/* @vite-ignore */ `/src/${item.component}`
													)
											)
										)
									}
								/>
							</Suspense>
						}
					/>
				);
			})}
		</Routes>
	);
};

const PageRoute: React.FC = () => {
	return <Router>{routerMap(pageRoutes)}</Router>;
};

export default PageRoute;
