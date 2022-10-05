import { useEffect, useState } from "react";
import style from "./TableOfContent.module.scss";
import { Group, Textarea, TextInput } from "@mantine/core";
import Button from "components/Button";
import { useClipboard } from "@mantine/hooks";
import ReactMarkdown from "react-markdown";

const TableOfContent: React.FC = () => {
	const [url, setUrl] = useState("");
	const [markdown, setMarkdown] = useState("");
	const [toc, setToc] = useState("");
	const clipboard = useClipboard({ timeout: 500 });

	useEffect(() => {
		if (url.trim() === "" && markdown === "") return;

		setToc(markdown);

		// if (url.trim() !== "") {
		// 	const getData = async () => {
		// 		let URL = url;
		// 		const response = await fetch(URL);
		// 		const buffer = Buffer.from(response.arrayBuffer(), "utf-8");
		// 		console.log(ReactMarkdown(buffer.toString()).content);
		// 	};

		// 	getData();

		// 	setToc("");
		// }

		return;
	}, [url, markdown]);

	// https://raw.githubusercontent.com/lifeparticle/JS-Cheatsheet/main/README.md
	return (
		<div className={style.toc}>
			<div>
				<TextInput
					label="Table name"
					placeholder="Table name"
					value={url}
					onChange={(event) => setUrl(event.currentTarget.value)}
					mt="xl"
					autoComplete="nope"
				/>
				<Textarea
					placeholder=""
					label="Markdown"
					value={markdown}
					onChange={(event) => setMarkdown(event.currentTarget.value)}
					maxRows={29}
					minRows={29}
				/>
			</div>
			<div>
				<Group>
					<Button onClick={() => clipboard.copy(toc)}>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
				</Group>
				<ReactMarkdown>{toc}</ReactMarkdown>
			</div>
		</div>
	);
};

export default TableOfContent;
