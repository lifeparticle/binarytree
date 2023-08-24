import { Button } from "antd";
import { Check, Copy } from "lucide-react";
import style from "./clipboardButton.module.scss";
import { ClipboardButtonProps } from "./utils/types";

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
			icon={copied ? <Check size={18} /> : <Copy size={18} />}
		>
			{label}
		</Button>
	);
};

export default ClipboardButton;
