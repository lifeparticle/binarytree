import { useState } from "react";
import style from "./TableOfContent.module.scss";
import { Group, Textarea, TextInput } from "@mantine/core";
import Button from "components/Button";
import { useClipboard } from "@mantine/hooks";
import { marked } from "marked";
import { useCombinedKeyPress } from "utils/utils";
import { Input, Space } from "antd";

const { TextArea } = Input;

type TocItem = {
	tag: "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
	text: string;
};

const TableOfContent: React.FC = () => {
	const [url, setUrl] = useState("");
	const [markdown, setMarkdown] = useState("");
	const [tableOfContents, setTableOfContents] = useState<string>("");
	const clipboard = useClipboard({ timeout: 500 });
	useCombinedKeyPress(
		() =>
			fetchData(
				"https://raw.githubusercontent.com/lifeparticle/JS-Cheatsheet/main/README.md"
			),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => {
		setUrl("");
		setMarkdown("");
		setTableOfContents("");
	}, ["ControlLeft", "KeyC"]);

	const onMarkdownChange = (text: string) => {
		setMarkdown(text);
		const markdownHtml = marked.parse(text);
		const tempDiv = document.createElement("div");

		tempDiv.innerHTML = markdownHtml;
		const headings = [
			...tempDiv.querySelectorAll("h1, h2, h3, h4, h5, h6"),
		].map((el) => {
			return {
				tag: el.tagName as TocItem["tag"],
				text: el.textContent?.trim() || "",
			};
		});

		setTableOfContents(generateTableOfContentsText(headings));
	};
	const generateTableOfContentsText = (tableOfContents: TocItem[]) => {
		const generateTocItem = (text: string) => {
			return `[${text}](#${text
				.toLowerCase()
				.replace(/\s/g, "-")
				.replace(/[^A-Za-z0-9-_]/g, "")})`;
		};
		const tableOfContentsText = tableOfContents
			.reduce((acc, tocItem) => {
				const { tag, text } = tocItem;
				switch (tag) {
					case "H1": {
						acc.push(`- ${generateTocItem(text)}`);
						break;
					}
					case "H2": {
						acc.push(`\t* ${generateTocItem(text)}`);
						break;
					}
					case "H3": {
						acc.push(`\t\t+ ${generateTocItem(text)}`);

						break;
					}
					case "H4": {
						acc.push(`\t\t\t- ${generateTocItem(text)}`);

						break;
					}
					case "H5": {
						acc.push(`\t\t\t\t* ${generateTocItem(text)}`);

						break;
					}
					case "H6": {
						acc.push(`\t\t\t\t\t+ ${generateTocItem(text)}`);

						break;
					}
				}
				return acc;
			}, [] as string[])
			.join("\n");

		return tableOfContentsText;
	};

	const fetchData = (url: string) => {
		setUrl(url);

		fetch(url)
			.then((res) => res.text())
			.then(
				(result) => {
					setMarkdown(result);
					onMarkdownChange(result);
				},
				(error) => {
					console.log(error);
				}
			);
	};

	return (
		<div className={style.toc}>
			<div>
				<Input
					placeholder="URL"
					value={url}
					onChange={(event) => fetchData(event.currentTarget.value)}
					autoComplete="nope"
				/>
				<TextArea
					placeholder=""
					value={markdown}
					onChange={(event) =>
						onMarkdownChange(event.currentTarget.value)
					}
					rows={29}
				/>
			</div>
			<div>
				<Space>
					<Button onClick={() => clipboard.copy(tableOfContents)}>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
				</Space>

				<TextArea
					value={tableOfContents}
					rows={29}
					readOnly
				/>
			</div>
		</div>
	);
};

export default TableOfContent;
