import { Suspense, useState } from "react";
import { routes } from "routes.constant";
import { useRoutes } from "react-router-dom";
import { ConfigProvider, Layout, theme } from "antd";
import "App.scss";
import clsx from "clsx";
import Header from "sections/Header";
import Menus from "sections/Menus";

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
							<Suspense fallback={<div>Loading...</div>}>
								{useRoutes(routes)}
							</Suspense>
						</Content>
					</div>
				</div>
			</div>
		</ConfigProvider>
	);
}

export default App;
