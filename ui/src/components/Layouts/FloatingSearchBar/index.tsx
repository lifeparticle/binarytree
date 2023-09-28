import { Input, theme } from "antd";
import style from "./FloatingSearchBar.module.scss";
import Icon from "components/General/Icon";
import { useContext } from "react";
import { SearchModalContext } from "lib/utils/context/SearchModalProvider";
import useUserAgent from "lib/utils/hooks/useUserAgent";

const FloatingSearchBar = () => {
	const os = useUserAgent();
	const addonCommand = os === "win" ? "ctrl + k" : "⌘ K";

	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const { handleModalOpen } = useContext(SearchModalContext);

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
