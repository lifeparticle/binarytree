interface TextareaWithValidationProps {
	placeholder?: string;
	rows?: number;
	autoCorrect?: string;
	value: string | number;
	onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
	label: string;
	status: string;
}

export type { TextareaWithValidationProps };
