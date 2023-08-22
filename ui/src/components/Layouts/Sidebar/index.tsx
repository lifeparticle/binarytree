import { Layout } from "antd";
import Header from "components/Layouts/Header";
import Menu from "components/Layouts/Menu";
import { MENU_COLLAPSED_STORAGE_KEY } from "./utils/constant";
import useMenuCollapsed from "lib/utils/hooks/useMenuCollapsed";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import Footer from "components/Layouts/Footer";
import style from "./Sidebar.module.scss";
import { classNames } from "lib/utils/helper";

const { Sider } = Layout;

const Sidebar = () => {
	const { collapsed, toggleCollapse } = useMenuCollapsed(
		MENU_COLLAPSED_STORAGE_KEY
	);
	const { toggleTheme, isDarkMode } = useContext(DarkModeContext);

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className={classNames(
				isDarkMode ? style.sidebar__dark : style.sidebar
			)}
		>
			<Header
				handleThemeChange={toggleTheme}
				isDarkMode={isDarkMode}
				collapsed={collapsed}
				handleMenuCollapse={toggleCollapse}
			/>
			<Menu isDarkMode={isDarkMode} collapsed={collapsed} />

			<Footer handleThemeChange={toggleTheme} isDarkMode={isDarkMode} />
		</Sider>
	);
};

export default Sidebar;
