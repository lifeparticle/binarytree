import { useClipboard } from "@mantine/hooks";
import { Button, Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useState } from "react";
import style from "./MarkdownEditor.module.scss";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");
	const clipboard = useClipboard({ timeout: 500 });

	useCombinedKeyPress(
		() => setMarkdown("# Hello, World!"),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setMarkdown(""), ["ControlLeft", "KeyC"]);

	return (
		<div className={style.me}>
			<Space>
				<Button onClick={() => setMarkdown("")}>Clear</Button>
				<Button onClick={() => downloadTextFile(markdown, "README.md")}>
					Download Markdown
				</Button>
				<Button
					onClick={() => downloadPDFFile(markdown, "README.html")}
				>
					Download HTML
				</Button>
				<Button onClick={() => clipboard.copy(markdown)}>
					{clipboard.copied ? "Copied" : "Copy"}
				</Button>
			</Space>

			<SimpleMDE value={markdown} onChange={(val) => setMarkdown(val)} />
		</div>
	);
};

export default MarkdownEditor;
