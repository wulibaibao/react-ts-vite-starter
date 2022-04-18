const Loading: React.FC = () => {
	return (
		<div className="absolute left-0 right-0 bottom-0 top-0 z-20 bg-white flex items-center justify-center">
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loading;
