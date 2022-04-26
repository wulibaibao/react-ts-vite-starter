import React from "react";
import { AppContext } from "./hooks/useAppContext";

const THEME_SESSION_FIELD = "blog-site-theme";

const App: React.FC = (props) => {
	const { children } = props;

	const [theme, setTheme] = React.useState<Theme>(
		localStorage[THEME_SESSION_FIELD] ?? "light"
	);

	React.useLayoutEffect(() => {
		handleThemeChange();
	}, [theme]);

	const handleThemeChange = () => {
		document.body.setAttribute("data-theme", theme);
		window.localStorage.setItem(THEME_SESSION_FIELD, theme);
	};

	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			{children}
		</AppContext.Provider>
	);
};

export default App;
