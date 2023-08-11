import { useContext } from "react";
import Routes from "pages/Routes/Routes";
import Menu from "components/Layouts/Menu";
import { DarkModeContext } from "Provider";
import { ConfigProvider, Layout } from "antd";
import PageHeader from "components/PageHeader";
import Header from "components/Layouts/Header";
import { ErrorBoundary } from "react-error-boundary";
import useMenuCollapsed from "lib/utils/hooks/useMenuCollapsed";
// import { Footer } from "antd/es/layout/layout";

const { Sider, Content } = Layout;

const MENU_COLLAPSED_STORAGE_KEY = "menuCollapsed";

const App: React.FC = () => {
	const { algorithm, toggleTheme, isDarkMode } = useContext(DarkModeContext);

	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider
				theme={{
					algorithm,
					// token: {
					// 	fontFamily: "Inter",
					// },
				}}
			>
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
						<Content>
							<PageHeader />
							<Routes />
						</Content>
					</Layout>
				</Layout>
			</ConfigProvider>
		</ErrorBoundary>
	);
};

export default App;
