import Clipboard from "components/RenderProps/Clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import ClipboardButton from "components/General/ClipboardButton";
import {
	obsidian,
	stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { CodeHighlightWithCopyProps } from "./utils/types";
import style from "./CodeHighlightwithCopy.module.scss";

const CodeHighlightWithCopy: React.FC<CodeHighlightWithCopyProps> = ({
	codeString,
	language,
}) => {
	const { isDarkMode } = useContext(DarkModeContext);
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
				customStyle={{ padding: "20px" }}
			>
				{codeString}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodeHighlightWithCopy;
