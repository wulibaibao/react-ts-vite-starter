import React from "react";
import { AppContext } from "./hooks/useAppContext";

const THEME_SESSION_FIELD = "blog-site-theme";

const App: React.FC = (props) => {
	const { children } = props;
	const [theme, setTheme] = React.useState<Theme>("light");

	React.useEffect(() => {
		const blogTheme = window.localStorage.getItem(
			THEME_SESSION_FIELD
		) as any;
		if (blogTheme) setTheme(blogTheme);
	}, []);

	React.useMemo(() => {
		document.body.setAttribute("data-theme", theme);
		window.localStorage.setItem(THEME_SESSION_FIELD, theme);
	}, [theme]);

	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			{children}
		</AppContext.Provider>
	);
};

export default App;
