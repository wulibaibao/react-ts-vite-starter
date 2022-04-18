import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./components/Route";
import "./locals/i18n.config";

createRoot(document.getElementById("root") as Element, {}).render(
	<React.StrictMode>
		<Route />
	</React.StrictMode>
);
