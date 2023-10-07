import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeProvider } from "utils/context/DarkModeProvider";
import { BrowserRouter } from "react-router-dom";
import { SearchModalProvider } from "utils/context/SearchModalProvider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const client = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

root.render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<BrowserRouter>
				<DarkModeProvider>
					<SearchModalProvider>
						<App />
					</SearchModalProvider>
				</DarkModeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
