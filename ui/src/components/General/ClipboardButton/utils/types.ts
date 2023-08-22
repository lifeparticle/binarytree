interface ClipboardButtonProps {
	copyToClipboard: (text: string) => void;
	copied: boolean;
	text: string;
	label?: boolean;
}

export type { ClipboardButtonProps };
