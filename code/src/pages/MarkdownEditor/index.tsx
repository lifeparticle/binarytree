import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import style from "./MarkdownEditor.module.scss";
import { Group } from "@mantine/core";
import Button from "components/Button";
import { downloadPDFFile, downloadTextFile, useKeyPress } from "utils/utils";
import { useClipboard } from "@mantine/hooks";

const MarkdownEditor: React.FC = () => {
	const [markdown, setMarkdown] = useState("");
	const clipboard = useClipboard({ timeout: 500 });

	useKeyPress(() => setMarkdown("# Hello, World!"), ["KeyE"]);

	return (
		<div className={style.me}>
			<Group>
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
			</Group>
			<MDEditor
				value={markdown}
				onChange={(val: any) => setMarkdown(val)}
				height="800px"
				style={{ fontSize: "52" }}
			/>
		</div>
	);
};

export default MarkdownEditor;
