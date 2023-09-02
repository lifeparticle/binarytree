import React, { useRef, useContext } from "react";
import { Col, Row } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import style from "./TextEditor.module.scss";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const TextEditor: React.FC = () => {
	const { isDarkMode } = useContext(DarkModeContext);

	const editorRef = useRef<TinyMCEEditor | null>(null);

	return (
		<div className={style.te}>
			<Row gutter={[16, 16]}>
				<Col xs={24} lg={24}>
					<Editor
						tinymceScriptSrc="/tinymce/tinymce.min.js"
						onInit={(editor) => {
							editorRef.current = editor.target;
						}}
						initialValue="<p>This is the initial content of the editor.</p>"
						init={{
							height: "calc(100dvh - 70px)",
							wordcount_countcharacters: true,
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
								editor.ui.registry.addButton("showcounts", {
									text: "Show Counts",
									onAction: function () {
										const wordcount =
											editor.plugins.wordcount;

										console.log(
											wordcount.body.getWordCount()
										);
										console.log(
											wordcount.body.getCharacterCount()
										);
										console.log(
											wordcount.body.getCharacterCountWithoutSpaces()
										);

										console.log(
											wordcount.selection.getWordCount()
										);
										console.log(
											wordcount.selection.getCharacterCount()
										);
										console.log(
											wordcount.selection.getCharacterCountWithoutSpaces()
										);
									},
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
				</Col>
			</Row>
		</div>
	);
};

export default TextEditor;
