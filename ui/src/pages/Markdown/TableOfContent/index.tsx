import { useState } from "react";
import style from "./TableOfContent.module.scss";
import { marked } from "marked";
import { Input, Form, Card } from "antd";
import useCombinedKeyPress from "hooks/useCombinedKeyPress";
import { TocItem } from "./utils/types";
import { indentMap } from "./utils/constants";
import CopyInput from "components/Layouts/CopyInput";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import PageGrid from "components/Layouts/PageGrid";
import Warning from "components/General/Warning";
const { TextArea } = Input;

const TableOfContent: React.FC = () => {
	const [url, setUrl] = useState("");
	const [markdown, setMarkdown] = useState("");
	const [tableOfContents, setTableOfContents] = useState<string>("");

	useCombinedKeyPress(
		() =>
			fetchData(
				"https://raw.githubusercontent.com/lifeparticle/JS-Cheatsheet/main/README.md"
			),
		"KeyE"
	);
	useCombinedKeyPress(() => {
		setUrl("");
		setMarkdown("");
		setTableOfContents("");
	}, "KeyR");

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
				text: el.textContent?.trim() ?? "",
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
		<PageGrid className={style.toc}>
			<Card className={style.toc__input}>
				<Form layout="vertical">
					<CopyInput>
						<ResponsiveInputWithLabel
							label="Input URL"
							placeholder="URL"
							value={url}
							onChange={(event) =>
								fetchData(event.currentTarget.value)
							}
							type="text"
						/>

						<Clipboard
							text={url}
							clipboardComponent={ClipboardButton}
						/>
					</CopyInput>
					<Form.Item label="Content">
						<TextArea
							style={{
								height: "calc(100dvh - 290px)",
							}}
							placeholder=""
							value={markdown}
							onChange={(event) =>
								onMarkdownChange(event.currentTarget.value)
							}
							autoSize={false}
						/>
					</Form.Item>
				</Form>
			</Card>

			<Card className={style.toc__output}>
				{tableOfContents.length > 0 ? (
					<Form layout="vertical" className={style.toc__output_form}>
						<Clipboard
							text={tableOfContents}
							clipboardComponent={ClipboardButton}
						/>
						<Form.Item label="Output">
							<TextArea
								value={tableOfContents}
								style={{
									height: "calc(100vh - 290px)", // corrected "100dvh" to "100vh"
								}}
								autoSize={false}
							/>
						</Form.Item>
					</Form>
				) : (
					<Warning text="There is no data for TOC, please provide data first." />
				)}
			</Card>
		</PageGrid>
	);
};

export default TableOfContent;
