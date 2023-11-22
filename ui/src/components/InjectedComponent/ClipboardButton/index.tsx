import { Icon, ResponsiveButton } from "components/General";
import style from "./ClipboardButton.module.scss";

interface ClipboardButtonProps {
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
		<ResponsiveButton
			disabled={text === ""}
			className={style.button}
			onClick={(e) => {
				copyToClipboard(text);
				e.stopPropagation();
			}}
			icon={copied ? <Icon name="Check" /> : <Icon name="Copy" />}
			aria-label={`select ${label} `}
		>
			{label}
		</ResponsiveButton>
	);
};

export default ClipboardButton;
