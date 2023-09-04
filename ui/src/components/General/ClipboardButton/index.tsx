import { ResponsiveButton } from "components/General/FormComponents";
import style from "./ClipboardButton.module.scss";
import { ClipboardButtonProps } from "./utils/types";
import Icon from "components/General/Icon";

const ClipboardButton: React.FC<ClipboardButtonProps> = ({
	copyToClipboard,
	copied,
	text,
	label = "",
}) => {
	return (
		<ResponsiveButton
			disabled={text === ""}
			className={style.button}
			onClick={() => copyToClipboard(text)}
			icon={copied ? <Icon name="Check" /> : <Icon name="Copy" />}
		>
			{label}
		</ResponsiveButton>
	);
};

export default ClipboardButton;
