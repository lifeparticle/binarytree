import { Button, Space, theme } from "antd";
import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";

const Header: React.FC = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<Space
			style={{ backgroundColor: colorBgContainer, width: "100%" }}
			className={style.header}
		>
			<Button type="text">
				<Link to={"/"}>
					<Hexagon
						className={style.header_container_icon}
						color={colorText}
					/>
				</Link>
			</Button>
		</Space>
	);
};

export default Header;
