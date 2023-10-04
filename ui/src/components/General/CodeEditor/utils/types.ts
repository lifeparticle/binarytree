interface CodeEditorProps {
	handleCode: (code: string | undefined) => void;
	language: string;
	code: string;
	label: string;
	status?: string;
}

export type { CodeEditorProps };
