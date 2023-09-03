import { Avatar, Dropdown, Space, theme } from "antd";
import style from "./FloatingHeader.module.scss";
import { items } from "./utils/constants";
import Notification from "./components/Notification";
import avatar1 from "assets/avatars/avatar-1.svg";
import avatar2 from "assets/avatars/avatar-2.svg";
import avatar3 from "assets/avatars/avatar-3.svg";

const avatars = [avatar1, avatar2, avatar3];
const randomIndex = Math.floor(Math.random() * avatars.length);
const randomAvatar = avatars[randomIndex];

const FloatingHeader = () => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	return (
		<Space
			className={style.fb}
			style={{
				backgroundColor: colorBgContainer,
			}}
		>
			<Notification colorText={colorText} />
			<Dropdown
				menu={{ items }}
				placement="bottomLeft"
				arrow={{ pointAtCenter: true }}
				className={style.fb__about}
			>
				<Avatar
					size={{
						xs: 38,
						sm: 38,
						md: 38,
						lg: 38,
						xl: 38,
						xxl: 38,
					}}
					src={randomAvatar}
				/>
			</Dropdown>
		</Space>
	);
};

export default FloatingHeader;
