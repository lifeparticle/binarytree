import { useClipboard } from "@mantine/hooks";
import { Button, Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useCallback, useContext, useState } from "react";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import SimpleMDE from "react-simplemde-editor";
import style from "./MarkdownEditor.module.scss";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider/DarkModeProvider";
import "easymde/dist/easymde.min.css";
import "./editorMDE.css";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");
	const clipboard = useClipboard({ timeout: 500 });
	const { isDarkMode } = useContext(DarkModeContext);

	useCombinedKeyPress(
		() => setMarkdown("# Hello, World!"),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setMarkdown(""), ["ControlLeft", "KeyR"]);

	const onChange = useCallback((value: string) => {
		setMarkdown(value);
	}, []);

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
				<Button
					disabled={IS_MARKDOWN_EMPTY}
					onClick={() => clipboard.copy(markdown)}
				>
					{clipboard.copied ? "Copied" : "Copy"}
				</Button>
			</Space>

			<div className={isDarkMode ? "dark" : ""}>
				<SimpleMDE value={markdown} onChange={onChange} />
			</div>
		</div>
	);
};

export default MarkdownEditor;
