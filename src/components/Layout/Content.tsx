import Footer from "./Footer";

const LayoutContent: React.FC = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export default LayoutContent;
