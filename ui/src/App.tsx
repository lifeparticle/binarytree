import "App.scss";
import { useState } from "react";

import { ConfigProvider, Layout, theme } from "antd";
import TopHeader from "layout/header";
import Sidebar from "layout/sidebar";
import Router from "route";

const { Content } = Layout;

function App() {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleThemeChange = (checked: boolean) => {
		setIsDarkMode(checked);
	};

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<div className="container">
				<div className="sidebar">
					<Sidebar
						colorBgContainer={colorBgContainer}
						isDarkMode={isDarkMode}
					/>
				</div>

				<div className="main">
					<div className="header">
						<TopHeader
							handleThemeChange={handleThemeChange}
							colorBgContainer={colorBgContainer}
							isDarkMode={isDarkMode}
						/>
					</div>

					<div className="content">
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
