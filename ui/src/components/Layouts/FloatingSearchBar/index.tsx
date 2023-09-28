import { Input, theme } from "antd";
import style from "./FloatingSearchBar.module.scss";
import Icon from "components/General/Icon";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { useContext } from "react";

const FloatingSearchBar = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const addonCommand = userAgent.indexOf("win") != -1 ? "cmd + k" : "⌘ K";

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const { handleModalOpen } = useContext(DarkModeContext);

	return (
		<div
			className={style.fsb}
			style={{
				backgroundColor: colorBgContainer,
			}}
			onClick={handleModalOpen}
		>
			<Input
				addonBefore={<Icon name="Search" />}
				addonAfter={<>{addonCommand}</>}
				placeholder="Search..."
				value={""}
				onChange={handleModalOpen}
			/>
		</div>
	);
};

export default FloatingSearchBar;
