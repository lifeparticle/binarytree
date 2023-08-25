import { Button, Space, theme } from "antd";
import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { classNames } from "lib/utils/helper";

const Header: React.FC = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	const { isDarkMode } = useContext(DarkModeContext);

	return (
		<Space
			style={{ backgroundColor: colorBgContainer, width: "100%" }}
			className={classNames(
				style.header,
				isDarkMode ? style.header_dark : style.header_light
			)}
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
