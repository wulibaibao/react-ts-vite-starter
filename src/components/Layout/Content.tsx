import Header from "./Header";
import Footer from "./Footer";

const LayoutContent: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default LayoutContent;
