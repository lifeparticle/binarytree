import { Clipboard } from "components/ComponentInjector";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ClipboardButton } from "components/InjectedComponent";
import {
	obsidian,
	stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import style from "./CodeHighlightwithCopy.module.scss";
import useMode from "hooks/useMode";

interface CodeHighlightWithCopyProps {
	codeString: string;
	language: string;
}

const CodeHighlightWithCopy: React.FC<CodeHighlightWithCopyProps> = ({
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
