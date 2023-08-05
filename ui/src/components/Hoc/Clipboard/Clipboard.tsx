import useCopyToClipboard from "lib/utils/hooks/useCopyToClipboard";

export interface ClipboardProps {
	text: string;
	clipboardComponent: React.ElementType;
	className?: string;
}

const Clipboard: React.FC<ClipboardProps> = ({
	text,
	clipboardComponent: ClipboardComponent,
	className = "",
}) => {
	const { copied, copyToClipboard, ClipboardMessage } = useCopyToClipboard();

	return (
		<div className={className}>
			{ClipboardMessage}
			<ClipboardComponent
				copyToClipboard={copyToClipboard}
				copied={copied}
				text={text}
			/>
		</div>
	);
};

export default Clipboard;
