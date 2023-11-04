import React from "react";
import Editor from "@monaco-editor/react";
import useMode from "hooks/useMode";
import { Form } from "antd";
import style from "./CodeEditor.module.scss";
import ValidateStatus from "./components/ValidateStatus";

interface CodeEditorProps {
	handleCode: (code: string | undefined) => void;
	language: string;
	code: string;
	label: string;
	status?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
	handleCode,
	language,
	code,
	label,
	status,
}) => {
	const { isDarkMode } = useMode();
	return (
		<div className={style.textareaContainer}>
			<Form.Item label={label}>
				<Editor
					value={code}
					height={"50vh"}
					language={language || "javascript"}
					onChange={handleCode}
					theme={isDarkMode ? "vs-dark" : "light"}
				/>
			</Form.Item>

			<ValidateStatus status={status || ""} />
		</div>
	);
};

export default CodeEditor;
