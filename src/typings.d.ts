declare module "*.less";
declare module "*.module.less";
declare module "*.css";
declare module "*.module.css";
declare module "*.png";

declare type RouteConfig = {
	path?: string;
	component?: string;
	name?: string;
	routes?: RouteConfig[];
	redirect?: string;
}

declare type PageRoute = {
	path?: string;
	component?: React.LazyExoticComponent<React.FC<{}>> | any;

	name?: string;
	routes?: PageRoute[];
	redirect?: string;
};
