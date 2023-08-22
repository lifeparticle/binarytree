import { useState } from "react";
import style from "./TableOfContent.module.scss";
import { useClipboard } from "@mantine/hooks";
import { marked } from "marked";
import { Input, Button, Form, Card } from "antd";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import { TocItem } from "./utils/types";
import { indentMap } from "./utils/constant";
import CopyInput from "components/Layouts/CopyInput";
import InputComponent from "components/General/InputComponent";
const { TextArea } = Input;

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
	}, ["ControlLeft", "KeyR"]);

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

	const headingCounts: Record<string, number> = {};

	const getUniqueHeadingText = (text: string) => {
		if (headingCounts[text] >= 0) {
			headingCounts[text]++;
			return `${text}-${headingCounts[text]}`;
		} else {
			headingCounts[text] = 0;
			return text;
		}
	};

	const generateTocItem = (text: string) => {
		return `[${text}](#${getUniqueHeadingText(text)
			.toLowerCase()
			.replace(/\s/g, "-")
			.replace(/[^A-Za-z0-9-_]/g, "")})`;
	};

	const generateTableOfContentsText = (tableOfContents: TocItem[]) => {
		return tableOfContents
			.map((tocItem) => {
				return `${indentMap[tocItem.tag]}${generateTocItem(
					tocItem.text
				)}`;
			})
			.join("\n");
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
			<Card>
				<Form layout="vertical">
					<CopyInput>
						<InputComponent
							label="Provide URL"
							placeholder="URL"
							value={url}
							onChange={(event) =>
								fetchData(event.currentTarget.value)
							}
							type="text"
						/>
						<Button
							size="large"
							onClick={() => {
								setMarkdown("");
								setUrl("");
							}}
							role="clear_text"
						>
							Clear
						</Button>
					</CopyInput>
					<Form.Item label="Content">
						<TextArea
							placeholder=""
							value={markdown}
							onChange={(event) =>
								onMarkdownChange(event.currentTarget.value)
							}
							autoSize={{ maxRows: 48, minRows: 48 }}
						/>
					</Form.Item>
				</Form>
			</Card>
			<Card>
				<Form layout="vertical" className={style.toc__output}>
					<Button
						onClick={() => clipboard.copy(tableOfContents)}
						size="large"
					>
						{clipboard.copied ? "Copied" : "Copy"}
					</Button>
					<Form.Item label="Output">
						<TextArea
							value={tableOfContents}
							autoSize={{ maxRows: 48, minRows: 48 }}
						/>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default TableOfContent;
