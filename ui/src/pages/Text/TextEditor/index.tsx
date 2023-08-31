import React, { useState, useRef, useContext } from "react";
import { Badge, Card, Col, Row, Space } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import style from "./TextEditor.module.scss";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import Button from "components/General/Button";

const TextEditor: React.FC = () => {
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);
	const { isDarkMode } = useContext(DarkModeContext);

	const editorRef = useRef<TinyMCEEditor | null>(null);

	const updateCounts = (content: string) => {
		if (content.length === 0) {
			setWordCount(0);
			setCharCount(0);
			setCharCountWithoutSpace(0);
			return;
		}
		setWordCount(content.split(/[\s]+/g).length);
		setCharCount(content.replace(/[\s]+/g, " ").length);
		setCharCountWithoutSpace(content.replace(/[\s]+/g, "").trim().length);
	};

	const handleClear = () => {
		if (editorRef.current) {
			editorRef.current.setContent("");
			updateCounts("");
		}
	};

	const handleLog = () => {
		if (editorRef.current) {
			const content = editorRef.current.getContent({ format: "text" });
			updateCounts(content);
		}
	};

	return (
		<div className={style.te}>
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={20}>
					<Editor
						tinymceScriptSrc="/tinymce/tinymce.min.js"
						onInit={(editor) => {
							editorRef.current = editor.target;
						}}
						initialValue="<p>This is the initial content of the editor.</p>"
						init={{
							height: "80dvh",
							menubar: false,
							plugins: [
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"preview",
								"help",
							],

							skin: isDarkMode ? "oxide-dark" : "oxide",
							content_css: isDarkMode ? "dark" : "default",
							toolbar:
								"undo redo | blocks | " +
								"bold italic forecolor | alignleft aligncenter " +
								"alignright alignjustify | bullist numlist outdent indent | " +
								"removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
					/>
				</Col>

				<Col xs={24} lg={4}>
					<Card>
						<Space direction="vertical">
							<Space>
								<span>Word count </span>
								<Badge
									count={wordCount}
									showZero
									style={{ backgroundColor: "#52c41a" }}
								/>
							</Space>
							<Space>
								<span>Character </span>
								<Badge
									count={charCount}
									style={{ backgroundColor: "#52c41a" }}
									showZero
									overflowCount={999}
								/>
							</Space>
							<Space>
								<span>Character without space </span>
								<Badge
									count={charCountWithoutSpace}
									style={{ backgroundColor: "#52c41a" }}
									showZero
									overflowCount={999}
								/>
							</Space>

							<Space>
								<Button onClick={handleLog}>Show Count</Button>
							</Space>
						</Space>
					</Card>
				</Col>
			</Row>

			<Space>
				<Button onClick={handleClear}>Clear</Button>

				<Clipboard
					text={editorRef.current?.getContent() || " "}
					clipboardComponent={ClipboardButton}
				/>
			</Space>
		</div>
	);
};

export default TextEditor;
