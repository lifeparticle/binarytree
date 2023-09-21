import { Button, theme } from "antd";
import style from "./FloatingHeader.module.scss";
import Notification from "components/General/Notification";
import Icon from "components/General/Icon";
import { openLink } from "lib/utils/helper";

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
			<Button
				className={style.fb__button}
				onClick={() => openLink("/feedback", false)}
			>
				<Icon name="Megaphone" size={20} color={colorText} />
			</Button>
		</div>
	);
};

export default FloatingHeader;
