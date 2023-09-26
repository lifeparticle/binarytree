import { Button, theme } from "antd";
import style from "./FloatingHeader.module.scss";
import Notification from "components/General/Notification";
import Icon from "components/General/Icon";
import { Link } from "react-router-dom";

const FloatingHeader = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<div
			className={style.fb}
			style={{
				backgroundColor: colorBgContainer,
			}}
		>
			<Notification colorText={colorText} />
			<Link to="/feedback">
				<Button className={style.fb__button}>
					<Icon name="Megaphone" size={20} color={colorText} />
				</Button>
			</Link>
		</div>
	);
};

export default FloatingHeader;
