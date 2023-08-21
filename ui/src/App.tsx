import { useContext } from "react";
import Menu from "components/Layouts/Menu";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider/DarkModeProvider";
import {
	Button,
	ConfigProvider,
	Layout,
	MenuProps,
	Dropdown,
	Switch,
	theme,
} from "antd";
import Header from "components/Layouts/Header";
import { ErrorBoundary } from "react-error-boundary";
import useMenuCollapsed from "lib/utils/hooks/useMenuCollapsed";
import Footer from "components/Layouts/Footer";
import RoutesWithPageTitle from "pages/Routes";
import { Github, Moon, Settings, Sun } from "lucide-react";

const { Sider, Content } = Layout;

const MENU_COLLAPSED_STORAGE_KEY = "menuCollapsed";

const App: React.FC = () => {
	const { algorithm, toggleTheme, isDarkMode } = useContext(DarkModeContext);

	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);

	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<Switch
					checkedChildren={
						<Moon size={16} color={colorBgContainer} />
					}
					unCheckedChildren={<Sun size={16} />}
					onChange={toggleTheme}
					style={{ backgroundColor: colorText }}
					checked={isDarkMode}
				/>
			),
		},
		{
			key: "2",
			label: (
				<Button
					type="text"
					onClick={() =>
						window.open(
							"https://github.com/lifeparticle/binarytree",
							"_blank"
						)
					}
				>
					<Github color={colorText} />
				</Button>
			),
		},
	];

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider theme={{ algorithm }}>
				<Layout>
					<Layout hasSider>
						<Sider
							trigger={null}
							collapsible
							collapsed={collapsed}
							style={{
								overflow: "auto",
								overflowX: "hidden",
								height: "100dvh",
								backgroundColor: isDarkMode
									? "rgb(20, 20, 20)"
									: "rgb(255, 255, 255)",
							}}
						>
							<Header
								handleThemeChange={toggleTheme}
								isDarkMode={isDarkMode}
								collapsed={collapsed}
								handleMenuCollapse={toggleCollapse}
							/>
							<Menu
								isDarkMode={isDarkMode}
								collapsed={collapsed}
							/>
							<div className="app__menu_bottom">
								<Dropdown menu={{ items }} placement="topLeft">
									<Button>{<Settings />}</Button>
								</Dropdown>
								<Footer />
							</div>
						</Sider>
						<Layout>
							<Content>
								<RoutesWithPageTitle />
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</ConfigProvider>
		</ErrorBoundary>
	);
};

export default App;
