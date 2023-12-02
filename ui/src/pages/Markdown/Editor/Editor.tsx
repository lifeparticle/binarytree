import { Card, Space } from "antd";
import {
	downloadPDFFile,
	downloadTextFile,
} from "utils/helper-functions/files";
import { FC, useState } from "react";
import { useCombinedKeyPress, useMode } from "hooks";
import style from "./MarkdownEditor.module.scss";
import MDEditor from "@uiw/react-md-editor";
import { Clipboard } from "components/ComponentInjector";
import { ResponsiveButton } from "components/General";
import { ClipboardButton } from "components/InjectedComponent";

const MarkdownEditor: FC = () => {
	const [markdown, setMarkdown] = useState("");

	const { isDarkMode } = useMode();

	useCombinedKeyPress(() => setMarkdown("# Hello, World!"), "e");
	useCombinedKeyPress(() => setMarkdown(""), "r");

	const IS_MARKDOWN_EMPTY = markdown.length === 0;

	return (
		<div className={style.me}>
			<Card>
				<Space>
					<ResponsiveButton
						disabled={IS_MARKDOWN_EMPTY}
						onClick={() => setMarkdown("")}
					>
						Clear
					</ResponsiveButton>

					<ResponsiveButton
						disabled={IS_MARKDOWN_EMPTY}
						onClick={() => downloadTextFile(markdown, "README.md")}
					>
						Download Markdown
					</ResponsiveButton>

					<ResponsiveButton
						disabled={IS_MARKDOWN_EMPTY}
						onClick={() => downloadPDFFile(markdown, "README.html")}
					>
						Download HTML
					</ResponsiveButton>

					<Clipboard
						text={markdown}
						clipboardComponent={ClipboardButton}
					/>
				</Space>
			</Card>

			<div
				className={style.me__editor}
				data-color-mode={isDarkMode ? "dark" : "light"}
			>
				<MDEditor
					value={markdown}
					onChange={(value) => setMarkdown(value || "")}
					height="100%"
				/>
			</div>
		</div>
	);
};

export default MarkdownEditor;
