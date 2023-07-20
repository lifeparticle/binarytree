import { Layout } from "antd";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Hexagon } from "lucide-react";
import Navigation from "pages/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./sidebar.module.scss";

const { Sider } = Layout;

interface MenusProps {
	isDarkMode: boolean;
}

const Menus: React.FC<MenusProps> = ({ isDarkMode }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Sider
			trigger={null}
			collapsible
			collapsed={collapsed}
			className={clsx(style.sidebar, isDarkMode && style.darkMode)}
		>
			<div className={style.sidebar__logoContainer}>
				<Link to={"/"}>
					<Hexagon size={32} color="#6d8128" />
				</Link>
			</div>

			<button
				className={style.sidebar__collapsibleMenu}
				onClick={() => setCollapsed(!collapsed)}
			>
				{collapsed ? (
					<ChevronRight size={12} />
				) : (
					<ChevronLeft size={12} />
				)}
			</button>

			<Navigation />
		</Sider>
	);
};

export default Menus;
