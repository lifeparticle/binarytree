import React, { useRef, useContext, useState } from "react";
import { Col, Row } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import style from "./TextEditor.module.scss";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const TextEditor: React.FC = () => {
	const { isDarkMode } = useContext(DarkModeContext);

	const editorRef = useRef<TinyMCEEditor | null>(null);

	const [wordCount, setWordCount] = useState(0);
	const [charCount, setCharCount] = useState(0);
	const [charCountWithoutSpaces, setCharCountWithoutSpaces] = useState(0);

	const [selectedWordCount, setSelectedWordCount] = useState(0);
	const [selectedCharCount, setSelectedCharCount] = useState(0);
	const [selectedCharCountWithoutSpaces, setSelectedCharCountWithoutSpaces] =
		useState(0);

	return (
		<div className={style.te}>
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={24}>
					<Editor
						onEditorChange={(_, editor) => {
							const wordcount = editor.plugins.wordcount;
							setWordCount(wordcount.body.getWordCount());
							setCharCount(wordcount.body.getCharacterCount());
							setCharCountWithoutSpaces(
								wordcount.body.getCharacterCountWithoutSpaces()
							);
						}}
						tinymceScriptSrc="/tinymce/tinymce.min.js"
						onInit={(editor) => {
							editorRef.current = editor.target;
						}}
						initialValue=""
						init={{
							height: "calc(100dvh - 98px)",
							wordcount_countcharacters: true,
							menubar: true,
							resize: false,
							statusbar: false,
							promotion: false,
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
								"wordcount",
								"charcount",
							],

							skin: isDarkMode ? "oxide-dark" : "oxide",
							content_css: isDarkMode ? "dark" : "default",
							setup: function (editor) {
								editor.ui.registry.addButton("clearbutton", {
									text: "Clear",
									onAction: function () {
										editor.setContent("");
									},
								});
								editor.ui.registry.addButton(
									"copytoclipboard",
									{
										text: "Copy to Clipboard",
										onAction: function () {
											const content = editor.getContent();
											navigator.clipboard.writeText(
												content
											);
										},
									}
								);
								editor.on("NodeChange", function () {
									const wordcount = editor.plugins.wordcount;

									setSelectedWordCount(
										wordcount.selection.getWordCount()
									);
									setSelectedCharCount(
										wordcount.selection.getCharacterCount()
									);
									setSelectedCharCountWithoutSpaces(
										wordcount.selection.getCharacterCountWithoutSpaces()
									);
								});
							},

							toolbar:
								"undo redo | blocks | " +
								"bold italic forecolor | alignleft aligncenter " +
								"alignright alignjustify | bullist numlist outdent indent | " +
								"removeformat  | help | clearbutton | copytoclipboard | showcounts",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
					/>
					<div className={style.te__footer}>
						<span>{wordCount} Words </span>
						<span>{charCount} Characters</span>
						<span>
							{charCountWithoutSpaces} Characters (No spaces)
						</span>
						<span>{selectedWordCount} Selected Words</span>
						<span>{selectedCharCount} Selected Characters</span>
						<span>
							{selectedCharCountWithoutSpaces} Selected Characters
							(No spaces)
						</span>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default TextEditor;
