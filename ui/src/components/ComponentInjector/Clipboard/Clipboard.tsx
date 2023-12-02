import { useCopyToClipboard } from "hooks";
import { ClipboardProps } from "./utils/test";
import { FC } from "react";

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
