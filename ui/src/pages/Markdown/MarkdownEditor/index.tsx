import { Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useContext, useState } from "react";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import style from "./MarkdownEditor.module.scss";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import MDEditor from "@uiw/react-md-editor";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import Button from "components/General/Button";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");

	const { isDarkMode } = useContext(DarkModeContext);

	useCombinedKeyPress(
		() => setMarkdown("# Hello, World!"),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setMarkdown(""), ["ControlLeft", "KeyR"]);

	const IS_MARKDOWN_EMPTY = markdown.length === 0;

	return (
		<div className={style.me}>
			<Space>
				<Button
					disabled={IS_MARKDOWN_EMPTY}
					onClick={() => setMarkdown("")}
				>
					Clear
				</Button>

				<Button
					disabled={IS_MARKDOWN_EMPTY}
					onClick={() => downloadTextFile(markdown, "README.md")}
				>
					Download Markdown
				</Button>

				<Button
					disabled={IS_MARKDOWN_EMPTY}
					onClick={() => downloadPDFFile(markdown, "README.html")}
				>
					Download HTML
				</Button>

				<Clipboard
					text={markdown}
					clipboardComponent={ClipboardButton}
				/>
			</Space>

			<div
				className={style.me__editor}
				data-color-mode={isDarkMode ? "dark" : "light"}
			>
				<MDEditor
					value={markdown}
					onChange={(value) => value && setMarkdown(value)}
					height="100%"
				/>
			</div>
		</div>
	);
};

export default MarkdownEditor;
