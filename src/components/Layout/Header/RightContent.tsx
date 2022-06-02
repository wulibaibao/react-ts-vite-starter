import React from "react";
import ThemeTigger from "./ThemeTigger";
import LoginBtn from "./LoginBtn";
import PageSearch from "./PageSearch";

const RightContent: React.FC = () => {
	return (
		<div className="flex flex-row gap-3">
			<PageSearch />
			<ThemeTigger />
			<LoginBtn />
		</div>
	);
};

export default RightContent;
