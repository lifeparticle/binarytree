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
			<RichTextEditor
				value={value}
				onChange={onChange}
				sticky={true}
				stickyOffset={60}
				className={style.te__editor}
			/>
			<div className={style.te__footer}>
				<h4>Word count: {wordCount}</h4>
				<h4>Charecter count: {charCount}</h4>
				<h4>Charecter count without space: {charCountWithoutSpace}</h4>
			</div>
			<Button
				className={style.te__button}
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
