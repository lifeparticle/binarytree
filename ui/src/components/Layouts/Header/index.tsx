import { Button, Layout, theme } from "antd";
import { ArrowLeftFromLine, ArrowRightFromLine, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { HeaderProps } from "./utils/types";
const { Header: AntHeader } = Layout;

const Header: React.FC<HeaderProps> = ({ collapsed, handleMenuCollapse }) => {
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
		</AntHeader>
	);
};

export default Header;
