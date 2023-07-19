import { Layout } from "antd";
import { ChevronLeft, ChevronRight, Hexagon } from "lucide-react";
import Navigation from "pages/Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./layout.module.scss";

const { Sider } = Layout;

interface SidebarProps {
	isDarkMode: boolean;
	colorBgContainer: string;
}

function Sidebar({ isDarkMode, colorBgContainer }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Sider
			style={{
				backgroundColor: isDarkMode ? "#141414" : colorBgContainer,
				borderRight: isDarkMode ? "none" : "1px solid #ededed",
				width: "400px",
			}}
			trigger={null}
			collapsible
			collapsed={collapsed}
			className={style.sidebarSp}
		>
			<div className={style.logoContainer}>
				<Link to={"/"}>
					<Hexagon size={32} color="#6d8128" />
				</Link>
			</div>

			<button
				className={style.collapsibleMenu}
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
}

export default Sidebar;
