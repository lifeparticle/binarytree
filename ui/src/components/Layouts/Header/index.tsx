import { Button, theme } from "antd";
import { ArrowLeftFromLine, ArrowRightFromLine, Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { HeaderProps } from "./utils/types";

const Header: React.FC<HeaderProps> = ({ collapsed, handleMenuCollapse }) => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<div className={style.header} style={{ background: colorBgContainer }}>
			<div className={style.header_container}>
				<Button type="text">
					<Link to={"/"}>
						<Hexagon
							className={style.header_container_icon}
							color={colorText}
						/>
					</Link>
				</Button>

				<Button onClick={handleMenuCollapse} type="text">
					{collapsed ? (
						<ArrowRightFromLine
							size={collapsed ? 14 : 18}
							color={colorText}
						/>
					) : (
						<ArrowLeftFromLine
							size={collapsed ? 14 : 18}
							color={colorText}
						/>
					)}
				</Button>
			</div>
		</div>
	);
};

export default Header;
