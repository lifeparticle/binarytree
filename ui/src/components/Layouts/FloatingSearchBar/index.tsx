import { Input } from "antd";
import style from "./FloatingSearchBar.module.scss";
import Icon from "components/General/Icon";
import { useContext } from "react";
import { SearchModalContext } from "lib/utils/context/SearchModalProvider";
import useUserAgent from "lib/utils/hooks/useUserAgent";

interface FloatingSearchBarProps {
	styles?: React.CSSProperties;
}

const FloatingSearchBar: React.FC<FloatingSearchBarProps> = ({ styles }) => {
	const os = useUserAgent();
	const addonCommand = os === "win" ? "ctrl + k" : "⌘ K";

	const { handleModalOpen } = useContext(SearchModalContext);

	return (
		<Input
			style={styles}
			addonBefore={<Icon name="Search" />}
			addonAfter={<>{addonCommand}</>}
			placeholder="Search..."
			value={""}
			onChange={handleModalOpen}
			className={style.fsb__input}
			onClick={handleModalOpen}
		/>
	);
};

export default FloatingSearchBar;
