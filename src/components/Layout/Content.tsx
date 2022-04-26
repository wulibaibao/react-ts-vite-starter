import Header from "./Header";
import Footer from "./Footer";
import ProfileSideCard from "../Profile/SideCard";

const LayoutContent: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<div className="flex flex-row mx-auto">
				<div className=" w-1/4">
					<ProfileSideCard />
				</div>
				<div className=" w-3/4">{children}</div>
			</div>
			<Footer />
		</>
	);
};

export default LayoutContent;
