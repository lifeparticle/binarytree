import style from "./Warning.module.scss";
import { Icon } from "components/General";

interface WarningProps {
	text?: string;
}

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
