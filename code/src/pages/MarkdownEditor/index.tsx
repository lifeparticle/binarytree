import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import style from "./MarkdownEditor.module.scss";

const MarkdownEditor: React.FC = () => {
	const [value, setValue] = useState("**Hello world!!!**");
	return (
		<div className={style.me}>
			<MDEditor
				value={value}
				onChange={(val: any) => setValue(val)}
				height="800px"
				style={{ fontSize: "52" }}
			/>
		</div>
	);
};

export default MarkdownEditor;
