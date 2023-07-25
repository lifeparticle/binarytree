import { ConfigProvider, Layout, Typography } from "antd";
import useDarkMode, { useMenuCollapsed, usePageTitle } from "lib/utils/hooks";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "routes.constant";
import Header from "sections/Header";
import Menu from "sections/Menu";

const { Sider, Content } = Layout;

function App() {
	const { algorithm, toggleTheme, isDarkMode } = useDarkMode(
		"darkMode",
		false
	);
	const { collapsed, toggleCollapse } = useMenuCollapsed("menuCollapsed");
	const currentTitle = usePageTitle(routes);

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
					handleMenuCollapse={toggleCollapse}
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
