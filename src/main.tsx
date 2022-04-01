import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./components/Route";

createRoot(document.getElementById("root") as Element, {}).render(
	<React.StrictMode>
		<Route />
	</React.StrictMode>
);
