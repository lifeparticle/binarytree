import { WarningProps } from "./utils/types";
import Icon from "components/General/Icon";
import style from "./Warning.module.scss";

const Warning: React.FC<WarningProps> = ({ text }) => {
	return (
		<div className={style.warning}>
			<span>
				<Icon name="AlertTriangle" size={30} />
			</span>

			<p>{text}</p>
		</div>
	);
};

export default Warning;
