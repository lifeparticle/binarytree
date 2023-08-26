import { Button } from "antd";
import style from "./clipboardButton.module.scss";
import { ClipboardButtonProps } from "./utils/types";
import Icon from "components/General/Icon";

const ClipboardButton: React.FC<ClipboardButtonProps> = ({
	copyToClipboard,
	copied,
	text,
	label = "",
}) => {
	return (
		<Button
			size="large"
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
