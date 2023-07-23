import { useClipboard } from "@mantine/hooks";
import MDEditor from "@uiw/react-md-editor";
import { Button, Space } from "antd";
import { downloadPDFFile, downloadTextFile } from "lib/utils/files";
import { useCombinedKeyPress } from "lib/utils/keypress";
import { useState } from "react";
import style from "./MarkdownEditor.module.scss";

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
					Downlaod
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
