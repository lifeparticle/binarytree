import { Input } from "antd";
import style from "./FloatingSearchBar.module.scss";
import { useUserAgent } from "hooks";
import { useModal } from "hooks";
import { Icon } from "components/General";
import { FC } from "react";

interface FloatingSearchBarProps {
	styles?: React.CSSProperties;
}

const FloatingSearchBar: FC<FloatingSearchBarProps> = ({ styles }) => {
	const os = useUserAgent();
	const addonCommand = os === "win" ? "ctrl + k" : "⌘ K";

	const { handleModalOpen } = useModal();

	return (
		<Input
			style={styles}
			addonBefore={<Icon name="Search" />}
			addonAfter={<>{addonCommand}</>}
			placeholder="Search..."
			value=""
			onChange={handleModalOpen}
			className={style.fsb__input}
			onClick={handleModalOpen}
		/>
	);
};

export default FloatingSearchBar;
