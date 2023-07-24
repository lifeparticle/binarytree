import { ConfigProvider, Layout, Typography } from "antd";
import useDarkMode, { usePageTitle, useWindowWidth } from "lib/utils/hooks";
import { Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "routes.constant";
import Header from "sections/Header";
import Menu from "sections/Menu";

const { Sider, Content } = Layout;

export const MOBILE_WIDTH = 768;

function App() {
	const { algorithm, toggleTheme, isDarkMode } = useDarkMode(
		"darkMode",
		false
	);
	const currentTitle = usePageTitle(routes);
	const { windowWidth } = useWindowWidth(MOBILE_WIDTH);
	const [collapsed, setCollapsed] = useState(windowWidth <= MOBILE_WIDTH);

	useEffect(() => {
		setCollapsed(windowWidth <= MOBILE_WIDTH);
	}, [windowWidth]);

	return (
		<ConfigProvider
			theme={{
				algorithm,
			}}
		>
			<Layout>
				<Header
					handleThemeChange={toggleTheme}
					collapsed={collapsed}
					setCollapsed={setCollapsed}
				/>
				<Layout hasSider>
					<Sider
						trigger={null}
						collapsible
						collapsed={collapsed}
						style={{
							overflow: "auto",
							height: "100vh",
							position: "sticky",
							left: 0,
							top: 64,
							bottom: 0,
							backgroundColor: isDarkMode
								? "rgb(20, 20, 20)"
								: "rgb(255, 255, 255)",
						}}
					>
						<Menu isDarkMode={isDarkMode} collapsed={collapsed} />
					</Sider>
					<Content>
						<Typography.Title level={2}>
							{currentTitle}
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
