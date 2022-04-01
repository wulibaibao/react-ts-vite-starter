const Dashboard: React.FC = () => {
	return (
		<div
			className="hero min-h-screen bg-base-200"
			style={{
				backgroundImage:
					"url(https://api.lorem.space/image/fashion?w=1000&h=800)",
			}}
		>
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
