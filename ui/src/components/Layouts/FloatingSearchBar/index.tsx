import { Input, theme } from "antd";
import style from "./FloatingSearchBar.module.scss";
import Icon from "components/General/Icon";
const FloatingSearchBar = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<div
			className={style.fsb}
			style={{
				backgroundColor: colorBgContainer,
			}}
		>
			<Input
				addonBefore={<Icon name="Search" />}
				addonAfter={<>cmd + k</>}
				placeholder="Search..."
			/>
		</div>
	);
};

export default FloatingSearchBar;
