import React from "react";
import PostListItem from "./components/PostListItem";

const Posts: React.FC = () => {
	const list = new Array(6).fill("");
	return (
		<div className=" p-3 flex flex-col gap-3">
			{list.map((k: any, i: number) => (
				<PostListItem key={i} />
			))}
		</div>
	);
};

export default Posts;
