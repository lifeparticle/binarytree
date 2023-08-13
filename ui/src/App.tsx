import { useContext } from "react";
import Menu from "components/Layouts/Menu";
import { DarkModeContext } from "Provider";
import { ConfigProvider, Layout } from "antd";
import Header from "components/Layouts/Header";
import { ErrorBoundary } from "react-error-boundary";
import useMenuCollapsed from "lib/utils/hooks/useMenuCollapsed";
import RoutesWithPageTitle from "pages/Routes/RoutesWithPageTitle";
import { Footer } from "antd/es/layout/layout";

const { Sider, Content } = Layout;

const MENU_COLLAPSED_STORAGE_KEY = "menuCollapsed";

const App: React.FC = () => {
	const { algorithm, toggleTheme, isDarkMode } = useContext(DarkModeContext);

	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider theme={{ algorithm }}>
				<Layout>
					<Header
						handleThemeChange={toggleTheme}
						isDarkMode={isDarkMode}
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
								overflowX: "hidden",
								height: "calc(100vh - 64px)",
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
						<Layout>
							<Content>
								<RoutesWithPageTitle />
							</Content>
							<Footer>
								<a href="https://www.netlify.com">
									<img
										src="https://www.netlify.com/v3/img/components/netlify-dark.svg"
										alt="Deploys by Netlify"
									/>
								</a>
							</Footer>
						</Layout>
					</Layout>
				</Layout>
			</ConfigProvider>
		</ErrorBoundary>
	);
};

export default App;
