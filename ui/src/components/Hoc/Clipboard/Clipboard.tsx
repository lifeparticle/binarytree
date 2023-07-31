import useCopyToClipboard from "lib/utils/hooks/useCopyToClipboard";

interface ClipboardProps {
	text: string;
	clipboardComponent: React.ElementType;
}

const Clipboard: React.FC<ClipboardProps> = ({
	text,
	clipboardComponent: ClipboardComponent,
}) => {
	const { copied, copyToClipboard, ClipboardMessage } = useCopyToClipboard();

	return (
		<>
			{ClipboardMessage}
			<ClipboardComponent
				copyToClipboard={copyToClipboard}
				copied={copied}
				text={text}
			/>
		</>
	);
};

export default Clipboard;
