import Clipboard from "components/RenderProps/Clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import ClipboardButton from "components/General/ClipboardButton";
import {
	obsidian,
	stackoverflowLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeHighlightWithCopyProps } from "./utils/types";
import style from "./CodeHighlightwithCopy.module.scss";
import useTheme from "lib/utils/hooks/useTheme";

const CodeHighlightWithCopy: React.FC<CodeHighlightWithCopyProps> = ({
	codeString,
	language,
}) => {
	const { isDarkMode } = useTheme();
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
