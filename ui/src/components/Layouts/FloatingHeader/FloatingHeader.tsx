import { FC } from "react";
import style from "./FloatingHeader.module.scss";
import { Notification } from "components/General";

interface FloatingHeaderProps {
	styles?: React.CSSProperties;
}

const FloatingHeader: FC<FloatingHeaderProps> = ({ styles }) => {
	return (
		<div className={style.fh} style={styles}>
			<Notification />
		</div>
	);
};

export default FloatingHeader;
