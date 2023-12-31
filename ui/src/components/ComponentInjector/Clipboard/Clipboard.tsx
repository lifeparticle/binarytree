import { useCopyToClipboard } from "hooks";
import { FC } from "react";

interface ClipboardProps {
	text: string;
	clipboardComponent: React.ElementType;
	className?: string;
	label?: string;
}

const Clipboard: FC<ClipboardProps> = ({
	text,
	clipboardComponent: ClipboardComponent,
	className = "",
	label,
}) => {
	const { copied, copyToClipboard, ClipboardMessage } = useCopyToClipboard();

	return (
		<div className={className}>
			{ClipboardMessage}
			<ClipboardComponent
				copyToClipboard={copyToClipboard}
				copied={copied}
				text={text}
				label={label}
			/>
		</div>
	);
};

export default Clipboard;
