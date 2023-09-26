import { Input } from "antd";
import style from "./FloatingSearchBar.module.scss";
import Icon from "components/General/Icon";
const FloatingSearchBar = () => {
	return (
		<div className={style.fsb}>
			<Input
				addonBefore={<Icon name="Search" />}
				addonAfter={<>cmd + k</>}
				placeholder="Search..."
			/>
		</div>
	);
};

export default FloatingSearchBar;
