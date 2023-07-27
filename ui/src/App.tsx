import { ConfigProvider, Layout } from "antd";
import useDarkMode, { useMenuCollapsed } from "lib/utils/hooks";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "routes.constant";
import Header from "sections/Header";
import Menu from "sections/Menu";
import { ErrorBoundary } from "react-error-boundary";
import PageHeader from "Components/PageHeader";

const { Sider, Content } = Layout;

const darkModeStorageKey = "darkMode";
const menuCollapsedStorageKey = "menuCollapsed";

function App() {
	const { algorithm, toggleTheme, isDarkMode } = useDarkMode(
		darkModeStorageKey,
		false
	);
	const { collapsed, toggleCollapse } = useMenuCollapsed(
		menuCollapsedStorageKey
	);

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
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
							<Menu
								isDarkMode={isDarkMode}
								collapsed={collapsed}
							/>
						</Sider>
						<Content>
							<PageHeader />
							<ErrorBoundary
								fallback={<p>Something went wrong</p>}
							>
								<Suspense fallback={<div>Loading...</div>}>
									{useRoutes(routes)}
								</Suspense>
							</ErrorBoundary>
						</Content>
					</Layout>
				</Layout>
			</ConfigProvider>
		</ErrorBoundary>
	);
}

export default App;
