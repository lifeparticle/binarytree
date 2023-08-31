import style from "./ClipboardButton.module.scss";
import { ClipboardButtonProps } from "./utils/types";
import Icon from "components/General/Icon";
import Button from "components/General/Button";

const ClipboardButton: React.FC<ClipboardButtonProps> = ({
	copyToClipboard,
	copied,
	text,
	label = "",
}) => {
	return (
		<Button
			disabled={text === ""}
			className={style.button}
			onClick={() => copyToClipboard(text)}
			icon={copied ? <Icon name="Check" /> : <Icon name="Copy" />}
		>
			{label}
		</Button>
	);
};

export default ClipboardButton;
