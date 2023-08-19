import { useClipboard } from "@mantine/hooks";
import { Button, Card, Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useContext, useState } from "react";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import style from "./MarkdownEditor.module.scss";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider/DarkModeProvider";
import MDEditor from "@uiw/react-md-editor";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");
	const clipboard = useClipboard({ timeout: 500 });
	const { isDarkMode } = useContext(DarkModeContext);

	useCombinedKeyPress(
		() => setMarkdown("# Hello, World!"),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setMarkdown(""), ["ControlLeft", "KeyR"]);

	const IS_MARKDOWN_EMPTY = markdown.length === 0;

	return (
		<Card>
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

				<div data-color-mode={isDarkMode ? "dark" : "light"}>
					<MDEditor
						value={markdown}
						onChange={(value) => value && setMarkdown(value)}
						height={500}
					/>
				</div>
			</div>
		</Card>
	);
};

export default MarkdownEditor;
