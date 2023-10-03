import { Card, Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useState } from "react";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import style from "./MarkdownEditor.module.scss";
import MDEditor from "@uiw/react-md-editor";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { ResponsiveButton } from "components/General/FormComponents";
import useMode from "lib/utils/hooks/useMode";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");

	const { isDarkMode } = useMode();

	useCombinedKeyPress(() => setMarkdown("# Hello, World!"), "KeyE");
	useCombinedKeyPress(() => setMarkdown(""), "KeyR");

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
