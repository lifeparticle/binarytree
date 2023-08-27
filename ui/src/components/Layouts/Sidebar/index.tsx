import { Layout, theme } from "antd";
import Header from "components/Layouts/Header";
import Menu from "components/Layouts/Menu";
import { MENU_COLLAPSED_STORAGE_KEY } from "./utils/constants";
import useMenuCollapsed from "lib/utils/hooks/useMenuCollapsed";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import Footer from "components/Layouts/Footer";
import style from "./Sidebar.module.scss";

const { Sider } = Layout;

const Sidebar = () => {
	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);
	const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

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
