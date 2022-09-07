import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import style from "./TextEditor.module.scss";
import { useEffect } from "react";

const TextEditor: React.FC = () => {
	const [value, onChange] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);

	useEffect(() => {
		let cleanValue = value.trim().replace("<p><br></p>", "");
		cleanValue = cleanValue
			.replace(/<p>/g, "")
			.replace(/<\/p>/g, "\n")
			.replace(/<br>/g, "");
		if (cleanValue === "") return;
		console.log(value);
		console.log(cleanValue);
		console.log(cleanValue.split(/[\n\s]+/));

		setWordCount(cleanValue.split(/\s+/).length);
		setCharCount(cleanValue.length);
		setCharCountWithoutSpace(cleanValue.split(/\s+/).join("").length);
	}, [value]);
	return (
		<div className={style.te}>
			<h3>Word count: {wordCount}</h3>
			<h3>Charecter count: {charCount}</h3>
			<h3>Charecter count witout space: {charCountWithoutSpace}</h3>
			<RichTextEditor value={value} onChange={onChange} />
		</div>
	);
};

export default TextEditor;
