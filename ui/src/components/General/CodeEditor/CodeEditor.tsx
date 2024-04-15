import { FC } from "react";
import Editor from "@monaco-editor/react";
import { useMode } from "hooks";
import { Form } from "antd";
import style from "./CodeEditor.module.scss";
import ValidateStatus from "./components/ValidateStatus";

interface CodeEditorProps {
	handleCode?: (code: string | undefined) => void;
	language?: string;
	value: string;
	label: string;
	status?: string;
}

const CodeEditor: FC<CodeEditorProps> = ({
	handleCode,
	language = "javascript",
	value,
	label,
	status,
}) => {
	const { isDarkMode } = useMode();
	return (
		<div className={style.textareaContainer}>
			<Form.Item label={label}>
				<Editor
					value={value}
					height="50dvh"
					language={language}
					onChange={handleCode}
					theme={isDarkMode ? "vs-dark" : "light"}
				/>
			</Form.Item>

			<ValidateStatus status={status ?? ""} />
		</div>
	);
};

export default CodeEditor;
