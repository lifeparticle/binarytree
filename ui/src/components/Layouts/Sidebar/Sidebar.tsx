import { Layout, theme } from "antd";
import Header from "components/Layouts/Header/Header";
import Menu from "components/Layouts/Menu/Menu";
import useMenuCollapsed from "hooks/useMenuCollapsed";
import Footer from "./components";
import style from "./Sidebar.module.scss";
import useMode from "hooks/useMode";

const { Sider } = Layout;

const MENU_COLLAPSED_STORAGE_KEY = "menuCollapsed";

const Sidebar = () => {
	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);
	const { toggleTheme, isDarkMode } = useMode();

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className={style.sidebar}
			style={{
				backgroundColor: colorBgContainer,
			}}
			width={250}
		>
			<Header />

			<Menu isDarkMode={isDarkMode} collapsed={collapsed} />

			<Footer
				collapsed={collapsed}
				handleThemeChange={toggleTheme}
				isDarkMode={isDarkMode}
				handleMenuCollapse={toggleCollapse}
			/>
		</Sider>
	);
};

export default Sidebar;
