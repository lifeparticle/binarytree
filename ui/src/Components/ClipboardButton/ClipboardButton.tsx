import { Button } from "antd";
import { useCopyToClipboard } from "lib/utils/hooks/constant";
import { Check, Copy } from "lucide-react";

interface ClipboardButtonProps {
	text: string;
}

const ClipboardButton: React.FC<ClipboardButtonProps> = ({ text }) => {
	const { copied, copyToClipboard, ClipboardMessage } = useCopyToClipboard();

	return (
		<>
			{ClipboardMessage}
			<Button onClick={() => copyToClipboard(text)}>
				{copied ? <Check size={20} /> : <Copy size={20} />}
			</Button>
		</>
	);
};

export default ClipboardButton;
