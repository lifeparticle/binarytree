import { useState } from "react";
import Router from "route";

import { ConfigProvider, Layout, theme } from "antd";

import "App.scss";
import clsx from "clsx";
import Header from "layout/Header";
import Menus from "layout/Menus";

const { Content } = Layout;

function App() {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleThemeChange = (checked: boolean) => {
		setIsDarkMode(checked);
	};

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<div className={"container"}>
				<Menus isDarkMode={isDarkMode} />

				<div className={"container__main"}>
					<div className={"container__main__header"}>
						<Header
							handleThemeChange={handleThemeChange}
							isDarkMode={isDarkMode}
						/>
					</div>

					<div
						className={clsx(
							"container__main__content",
							isDarkMode && "darkMode"
						)}
					>
						<Content>
							<Router />
						</Content>
					</div>
				</div>
			</div>
		</ConfigProvider>
	);
}

export default App;
