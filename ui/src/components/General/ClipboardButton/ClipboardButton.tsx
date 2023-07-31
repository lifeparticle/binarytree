import { Button } from "antd";
import { Check, Copy } from "lucide-react";

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
		<Button onClick={() => copyToClipboard(text)}>
			{copied ? <Check size={20} /> : <Copy size={20} />}
		</Button>
	);
};

export default ClipboardButton;
