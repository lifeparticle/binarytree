import { Button } from "antd";
import style from "./FloatingHeader.module.scss";
import Notification from "components/General/Notification";
import Icon from "components/General/Icon";
import { Link } from "react-router-dom";

interface FloatingHeaderProps {
	styles?: React.CSSProperties;
}

const FloatingHeader: React.FC<FloatingHeaderProps> = ({ styles }) => {
	return (
		<div className={style.fh} style={styles}>
			<Notification />
			<Link to="/feedback">
				<Button className={style.fh__button}>
					<Icon name="Megaphone" size={20} />
				</Button>
			</Link>
		</div>
	);
};

export default FloatingHeader;
