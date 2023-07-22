import { Layout, Typography } from "antd";
import Menu from "sections/Menu";
import Header from "sections/Header";
import { routes } from "routes.constant";
import { Suspense, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "antd";
import { usePageTitle } from "lib/utils/hooks";

const { Sider, Content } = Layout;

function App() {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleThemeChange = (checked: boolean) => {
		setIsDarkMode(checked);
	};
	const currentTitle = usePageTitle(routes);

	const [collapsed, setCollapsed] = useState(false);
	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<Menu
						isDarkMode={isDarkMode}
						collapsed={collapsed}
						setCollapsed={setCollapsed}
					/>
				</Sider>
				<Layout>
					<Header
						handleThemeChange={handleThemeChange}
						isDarkMode={isDarkMode}
					/>
					<Content>
						<Typography.Title level={2}>
							{currentTitle}{" "}
						</Typography.Title>
						<Suspense fallback={<div>Loading...</div>}>
							{useRoutes(routes)}
						</Suspense>
					</Content>
				</Layout>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
