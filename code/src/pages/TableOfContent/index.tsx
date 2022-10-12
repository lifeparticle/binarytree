import { useEffect, useState } from "react";
import style from "./TableOfContent.module.scss";
import { Group, Textarea, TextInput } from "@mantine/core";
import { Buffer } from 'buffer';
import Button from "components/Button";
import { useClipboard } from "@mantine/hooks";
import { downloadTextFile, downloadPDFFile } from "utils/utils";
// import { getTOC } from "./toc.gen";
import Toc from "react-toc";
// let toc = require("markdown-toc");
// import toc from "markdown-toc"
// import ReactMarkdown from "react-markdown";

const TableOfContent: React.FC = () => {
	const [url, setUrl] = useState("");
	const [markdown, setMarkdown] = useState("");
	const [toc, setToc] = useState("");
	const clipboard = useClipboard({ timeout: 500 });

	useEffect(() => {
		if (url.trim() === "" && markdown === "") return;

		if (url.trim() !== "") {
			const getData = async () => {
				let URL = url;
				const response = await fetch(URL);
				const arrayBuffer = await response.arrayBuffer()
				const buffer = Buffer.from(arrayBuffer, 8);
				console.log(buffer.toString())
				// console.log(ReactMarkdown(buffer));
				setMarkdown(buffer.toString())
			};
			getData();
			// const generatedTOC = getTOC(markdown)
			// setToc(generatedTOC)
			// setToc(getTOC(markdown))
		}

		return;
	}, [url, markdown]);

	// https://raw.githubusercontent.com/lifeparticle/JS-Cheatsheet/main/README.md
	return (
		<div className={style.toc}>
			<div>
				<TextInput
					label="Url"
					placeholder="Url"
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
					<Button onClick={() => { setMarkdown(""); setUrl("") }}>Clear</Button>
					<Button onClick={() => downloadTextFile(markdown, "README.md")}>
						Downlaod
					</Button>
					<Button
						onClick={() => downloadPDFFile(markdown, "README.pdf")}
					>
						Downlaod PDF
					</Button>
					<Button onClick={() => clipboard.copy(toc)}>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
				</Group>
				{/* <ReactMarkdown>{toc}</ReactMarkdown> */}
				<Toc markdownText={markdown} type={"default"} />
			</div>
			{/* <Textarea
				placeholder=""
				label="Table of Content"
				value={toc}
				maxRows={29}
				minRows={29}
			/> */}
		</div>
	);
};

export default TableOfContent;
