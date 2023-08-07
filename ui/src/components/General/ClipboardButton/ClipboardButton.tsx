import { Button } from "antd";
import { Check, Copy } from "lucide-react";
import style from "./clipboardButton.module.scss";

export interface ClipboardButtonProps {
	copyToClipboard: (text: string) => void;
	copied: boolean;
	text: string;
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({
	copyToClipboard,
	copied,
	text,
}) => {
	return (
		<Button
			className={style.button}
			onClick={() => copyToClipboard(text)}
			icon={copied ? <Check size={18} /> : <Copy size={18} />}
		/>
	);
};

export default ClipboardButton;
