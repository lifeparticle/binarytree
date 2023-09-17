import { WarningProps } from "./utils/types";
import Icon from "components/General/Icon";
import style from "./Warning.module.scss";

const Warning: React.FC<WarningProps> = ({ text }) => {
	return (
		<div className={style.warning}>
			<div>
				<span>
					<Icon name="AlertTriangle" size={30} />
				</span>

				<p>{text}</p>
			</div>
		</div>
	);
};

export default Warning;
