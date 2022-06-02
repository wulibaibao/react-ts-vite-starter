import React from "react";
import RightContent from "./RightContent";

const Header: React.FC = () => {
	React.useEffect(() => {}, []);

	return (
		<div className="navbar bg-base-100 px-6 border-gray-100 border-b shadow-sm dark:border-gray-600">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Blog</a>
			</div>

			<RightContent />
		</div>
	);
};

export default Header;
