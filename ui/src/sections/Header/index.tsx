import { Layout, Switch, Button, theme } from "antd";
import { Moon, Sun } from "lucide-react";
import style from "./header.module.scss";
import { ArrowLeftFromLine, ArrowRightFromLine, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
const { Header: AntHeader } = Layout;

interface HeaderProps {
	handleThemeChange: (checked: boolean) => void;
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
	handleThemeChange,
	collapsed,
	setCollapsed,
}) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<AntHeader
			className={style.header}
			style={{ background: colorBgContainer }}
		>
			<div>
				<Link to={"/"}>
					<Hexagon size={32} />
				</Link>

				<Button onClick={() => setCollapsed(!collapsed)}>
					{collapsed ? (
						<ArrowRightFromLine size={12} />
					) : (
						<ArrowLeftFromLine size={12} />
					)}
				</Button>
			</div>
			<Switch
				className={style.header_switch}
				checkedChildren={<Moon size={16} />}
				unCheckedChildren={<Sun size={16} />}
				onChange={handleThemeChange}
			/>
		</AntHeader>
	);
};

export default Header;
