import { Button, Card } from "antd";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import style from "./TextEditor.module.scss";
import "./quill.css";

const TextEditor: React.FC = () => {
	const [value, onChange] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);

	useEffect(() => {
		const cleanValue = value.replace(/(<([^>]+)>)/gi, " ").trim();
		if (cleanValue === "") {
			setWordCount(0);
			setCharCount(0);
			setCharCountWithoutSpace(0);
			return;
		}
		setWordCount(cleanValue.split(/[\s]+/g).length);
		setCharCount(cleanValue.replace(/[\s]+/g, " ").length);
		setCharCountWithoutSpace(cleanValue.replace(/[\s]+/g, "").length);
	}, [value]);

	return (
		<Card>
			<div className={style.te}>
				<ReactQuill theme="snow" value={value} onChange={onChange} />
				<div className={style.te__footer}>
					<h4>Word count: {wordCount}</h4>
					<h4>Character count with space: {charCount}</h4>
					<h4>
						Character count without space: {charCountWithoutSpace}
					</h4>
				</div>

				<Button
					onClick={() => {
						onChange("");
					}}
				>
					Clear
				</Button>
			</div>
		</Card>
	);
};

export default TextEditor;
