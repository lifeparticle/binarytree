import { Clipboard } from "components/ComponentInjector";
import { Prism } from "react-syntax-highlighter";
import { ClipboardButton } from "components/InjectedComponent";
import {
	obsidian,
	stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import style from "./CodeHighlightWithCopy.module.scss";
import { useMode } from "hooks";
import { FC } from "react";

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/539
const SyntaxHighlighter = Prism;

interface CodeHighlightWithCopyProps {
	codeString: string;
	language: string;
}

const CodeHighlightWithCopy: FC<CodeHighlightWithCopyProps> = ({
	codeString,
	language,
}) => {
	const { isDarkMode } = useMode();
	return (
		<div className={style.codeHighlight}>
			<div className={style.codeHighlight__copy__button}>
				<Clipboard
					text={codeString}
					clipboardComponent={ClipboardButton}
				/>
			</div>
			<SyntaxHighlighter
				showLineNumbers
				wrapLines
				language={language}
				style={isDarkMode ? obsidian : stackoverflowLight}
				customStyle={{ padding: "20px", borderRadius: "10px" }}
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeHighlightWithCopy;
