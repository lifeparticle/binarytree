import { useClipboard } from "@mantine/hooks";
import MDEditor from "@uiw/react-md-editor";
import { Button, Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useState, useContext } from "react";
import style from "./MarkdownEditor.module.scss";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import { DarkModeContext } from "Provider";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");
	const clipboard = useClipboard({ timeout: 500 });
	const { isDarkMode } = useContext(DarkModeContext);

	useCombinedKeyPress(
		() => setMarkdown("# Hello, World!"),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setMarkdown(""), ["ControlLeft", "KeyC"]);

	return (
		<div
			className={style.me}
			data-color-mode={isDarkMode ? "dark" : "light"}
		>
			<Space>
				<Button onClick={() => setMarkdown("")}>Clear</Button>
				<Button onClick={() => downloadTextFile(markdown, "README.md")}>
					Downlaod Markdown
				</Button>
				<Button onClick={() => downloadPDFFile(markdown, "README.pdf")}>
					Downlaod PDF
				</Button>
				<Button onClick={() => clipboard.copy(markdown)}>
					{clipboard.copied ? "Copied" : "Copy"}
				</Button>
			</Space>
			<MDEditor
				value={markdown}
				onChange={(val) => val && setMarkdown(val)}
				height="800px"
				style={{ fontSize: "52" }}
			/>
		</div>
	);
};

export default MarkdownEditor;
