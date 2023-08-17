import { Button } from "antd";
import { Check, Copy } from "lucide-react";
import style from "./clipboardButton.module.scss";

export interface ClipboardButtonProps {
	copyToClipboard: (text: string) => void;
	copied: boolean;
	text: string;
	label?: boolean;
}

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
			icon={copied ? <Check size={18} /> : <Copy size={18} />}
		>
			{label && label}
		</Button>
	);
};

export default ClipboardButton;
