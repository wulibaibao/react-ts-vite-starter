import React from "react";

type ProviderProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

export const AppContext = React.createContext<ProviderProps>({
	theme: "light",
	setTheme: () => false,
});

export const useAppContext = () => {
	return React.useContext(AppContext);
};
