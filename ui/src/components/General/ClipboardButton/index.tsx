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
			icon={
				copied ? (
					<Check size={18} strokeWidth="1.3" />
				) : (
					<Copy size={18} strokeWidth="1.3" />
				)
			}
		>
			{label}
		</Button>
	);
};

export default ClipboardButton;
