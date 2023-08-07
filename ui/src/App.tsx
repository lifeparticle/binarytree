import Menu from "components/Layouts/Menu";
import { ConfigProvider, Layout } from "antd";
import PageHeader from "components/PageHeader";
import Header from "components/Layouts/Header";
import { ErrorBoundary } from "react-error-boundary";
import useDarkMode from "lib/utils/hooks/useDarkMode";
import useMenuCollapsed from "lib/utils/hooks/useMenuCollapsed";
import Routes from "pages/Routes/Routes";

const { Sider, Content } = Layout;

const DARK_MODE_STORAGE_KEY = "darkMode";
const MENU_COLLAPSED_STORAGE_KEY = "menuCollapsed";

function App() {
	const { algorithm, toggleTheme, isDarkMode } = useDarkMode(
		DARK_MODE_STORAGE_KEY,
		false
	);
	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider
				theme={{
					algorithm,
					token: {
						fontFamily: "Inter",
					},
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
							<Routes />
						</Content>
					</Layout>
				</Layout>
			</ConfigProvider>
		</ErrorBoundary>
	);
}

export default App;
