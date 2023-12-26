import { FC, useEffect, useState } from "react";
import style from "./TableOfContent.module.scss";
import { marked } from "marked";
import { Input, Form, Card } from "antd";
import { useCombinedKeyPress, useFetch } from "hooks";
import { CopyInput, PageGrid } from "components/Layouts";
import { Warning, ResponsiveInputWithLabel } from "components/General";
import { Clipboard } from "components/ComponentInjector";
import { ClipboardButton } from "components/InjectedComponent";
import { TocItem } from "./types";
import { generateTableOfContentsText } from "./helper";
const { TextArea } = Input;

const EXAMPLE_URL =
	"https://raw.githubusercontent.com/lifeparticle/JS-Cheatsheet/main/README.md";

const TableOfContent: FC = () => {
	const [url, setUrl] = useState("");
	const [markdown, setMarkdown] = useState("");
	const [tableOfContents, setTableOfContents] = useState<string>("");
	const { data, isLoading, isError } = useFetch("markdown", url);

	useCombinedKeyPress(() => setUrl(EXAMPLE_URL), "e");

	useCombinedKeyPress(() => {
		setUrl("");
		setMarkdown("");
		setTableOfContents("");
	}, "r");

	const onMarkdownChange = async (text: string) => {
		setMarkdown(text);
		const markdownHtml = await marked.parse(text);
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

	useEffect(() => {
		if (isLoading) {
			setMarkdown("Loading...");
			setTableOfContents("Loading...");
		}
	}, [isLoading]);

	useEffect(() => {
		if (url && data && !isError) {
			setMarkdown(data);
			onMarkdownChange(data);
		}
	}, [data, isError, url]);

	return (
		<PageGrid className={style.toc}>
			<Card className={style.toc__input}>
				<Form layout="vertical">
					<CopyInput>
						<ResponsiveInputWithLabel
							label="Input URL"
							placeholder="URL"
							value={url}
							onChange={(event) => setUrl(event.target.value)}
							type="text"
						/>

						<Clipboard
							text={url}
							clipboardComponent={ClipboardButton}
						/>
					</CopyInput>
					<Form.Item label="Content">
						<TextArea
							className={style.toc__textarea}
							placeholder=""
							value={markdown}
							onChange={(event) =>
								onMarkdownChange(event.currentTarget.value)
							}
							autoSize={false}
							allowClear
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
								className={style.toc__textarea}
								autoSize={false}
								allowClear
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
