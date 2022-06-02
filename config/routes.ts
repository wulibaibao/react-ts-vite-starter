const routes = [
	{
		path: "/dashboard",
		name: "dashboard",
		component: "page/Dashboard",
	},
	{
		path: "/p",
		name: "post",
		routes: [
			{
				path: ":sulg",
				name: "posts",
				component: "page/Post/Posts",
			},

			{
				path: "*",
				name: "post-index",
				component: "page/Post",
			},
		],
	},
	{
		path: "/login",
		name: "login",
		layout: false,
		component: "page/Login",
	},
	{
		path: "*",
		redirect: "/",
	},
];

export default routes;
