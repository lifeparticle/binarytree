import style from "./FloatingHeader.module.scss";
import { Notification } from "components/General";

interface FloatingHeaderProps {
	styles?: React.CSSProperties;
}

const FloatingHeader: React.FC<FloatingHeaderProps> = ({ styles }) => {
	return (
		<div className={style.fh} style={styles}>
			<Notification />
		</div>
	);
};

export default FloatingHeader;
