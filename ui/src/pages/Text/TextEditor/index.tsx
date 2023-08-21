import React, { useState, useRef } from "react";
import { Badge, Button, Card, Col, Row, Space } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import style from "./TextEditor.module.scss";

const TextEditor: React.FC = () => {
	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpace, setCharCountWithoutSpace] = useState(0);

	const editorRef = useRef<TinyMCEEditor | null>(null);

	const updateCounts = (content: string) => {
		if (content.length === 0) {
			setWordCount(0);
			setCharCount(0);
			setCharCountWithoutSpace(0);
			return;
		}
		const cleanValue = content.replace(/(<([^>]+)>)/gi, "").trim();
		setWordCount(cleanValue.split(/[\s]+/g).length);
		setCharCount(cleanValue.replace(/[\s]+/g, " ").length);
		setCharCountWithoutSpace(cleanValue.replace(/[\s]+/g, "").length);
	};

	const handleClear = () => {
		if (editorRef.current) {
			editorRef.current.setContent("");
			updateCounts("");
		}
	};

	const handleLog = () => {
		if (editorRef.current) {
			const content = editorRef.current.getContent();
			updateCounts(content);
		}
	};

	return (
		<Card>
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
								height: 500,
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
									<Button onClick={handleLog}>
										Show Count
									</Button>
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
		</Card>
	);
};

export default TextEditor;
