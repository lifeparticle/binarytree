import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import style from "./TextEditor.module.scss";
import { useEffect } from "react";
import { Button } from "@mantine/core";

const TextEditor: React.FC = () => {
	const [value, onChange] = useState("");
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);

	useEffect(() => {
		let cleanValue = value.replace(/(<([^>]+)>)/gi, " ").trim();
		if (cleanValue === "") {
			setWordCount(0);
			setCharCount(0);
			setCharCountWithoutSpace(0);
			return;
		}
		setWordCount(cleanValue.split(/[\s]+/g).length);
		setCharCount(cleanValue.length);
		setCharCountWithoutSpace(cleanValue.replace(/[\s]+/g, "").length);
	}, [value]);
	return (
		<div className={style.te}>
			<h3>Word count: {wordCount}</h3>
			<h3>Charecter count: {charCount}</h3>
			<h3>Charecter count witout space: {charCountWithoutSpace}</h3>
			<RichTextEditor value={value} onChange={onChange} />
			<Button
				styles={(theme) => ({
					root: {
						backgroundColor:
							theme.colorScheme === "dark" ? theme.colors.dark : "#228be6",
					},
				})}
				onClick={() => {
					onChange("");
				}}
			>
				Clear
			</Button>
		</div>
	);
};

export default TextEditor;
