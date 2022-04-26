const routes = [
	{
		path: "/dashboard",
		name: "dashboard",
		component: "page/Dashboard",
	},
	{
		path: "/",
		name: "post",
		component: "page/Posts",
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
