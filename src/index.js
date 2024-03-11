import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provedor } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
	<Provedor>
		<App />
	</Provedor>
  </React.StrictMode>
);
