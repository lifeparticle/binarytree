import { Layout, Typography } from "antd";
import Menu from "sections/Menu";
import Header from "sections/Header";
import { routes } from "routes.constant";
import { Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";
import { theme } from "antd";
import { usePageTitle } from "lib/utils/hooks";

const { Sider, Content } = Layout;

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowWidth;
};

function App() {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleThemeChange = (checked: boolean) => {
		setIsDarkMode(checked);
	};
	const currentTitle = usePageTitle(routes);
	const windowWidth = useWindowWidth();
	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {
		setCollapsed(windowWidth <= 768);
	}, [windowWidth]);

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
			}}
		>
			<Layout>
				<Header
					handleThemeChange={handleThemeChange}
					collapsed={collapsed}
					setCollapsed={setCollapsed}
				/>
				<Layout hasSider>
					<Sider
						trigger={null}
						collapsible
						collapsed={collapsed}
						// style={{
						// 	overflow: "auto",
						// 	height: "100vh",
						// 	position: "fixed",
						// 	left: 0,
						// 	top: 64,
						// 	bottom: 0,
						// }}
					>
						<Menu isDarkMode={isDarkMode} collapsed={collapsed} />
					</Sider>
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
