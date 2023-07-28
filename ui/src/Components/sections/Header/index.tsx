import { Button, Layout, Switch, theme } from "antd";
import {
	ArrowLeftFromLine,
	ArrowRightFromLine,
	Hexagon,
	Moon,
	Sun,
	Github,
} from "lucide-react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
const { Header: AntHeader } = Layout;

interface HeaderProps {
	handleThemeChange: () => void;
	collapsed: boolean;
	handleMenuCollapse: () => void;
}

const Header: React.FC<HeaderProps> = ({
	handleThemeChange,
	collapsed,
	handleMenuCollapse,
}) => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<AntHeader
			className={style.header}
			style={{ background: colorBgContainer }}
		>
			<div className={style.header_left}>
				<Button type="text">
					<Link to={"/"}>
						<Hexagon color={colorText} />
					</Link>
				</Button>

				<Button
					onClick={handleMenuCollapse}
					type="text"
					className={style.header_left_collapseBtn}
				>
					{collapsed ? (
						<ArrowRightFromLine color={colorText} />
					) : (
						<ArrowLeftFromLine color={colorText} />
					)}
				</Button>
			</div>
			<div className={style.header_right}>
				<Switch
					className={style.header_switch}
					checkedChildren={
						<Moon size={16} color={colorBgContainer} />
					}
					unCheckedChildren={<Sun size={16} />}
					onChange={handleThemeChange}
					style={{ backgroundColor: colorText }}
				/>
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
			</div>
		</AntHeader>
	);
};

export default Header;
