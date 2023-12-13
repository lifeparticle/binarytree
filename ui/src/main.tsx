import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeProvider } from "utils/context/DarkModeProvider";
import { BrowserRouter } from "react-router-dom";
import { SearchModalProvider } from "utils/context/SearchModalProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
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
