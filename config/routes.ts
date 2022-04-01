const routes = [
	{
		path: "/dashboard",
		name: "dashboard",
		component: "page/Dashboard",
	},
	{
		path: "/",
		name: "home",
		component: "page/Home",
	},
	{
		path: "/login",
		name: "login",
		component: "page/Login",
	},
	{
		path: "*",
		redirect: "/",
	},
];

export default routes;
