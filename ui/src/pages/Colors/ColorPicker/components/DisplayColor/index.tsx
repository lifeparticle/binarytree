import { Typography, theme } from "antd";
import style from "./DisplayColor.module.scss";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { classNames, getTextColor, isTransparent } from "lib/utils/helper";
import { DisplayColorProps } from "pages/Colors/ColorPicker/utils/types";
import { useSearchParams } from "react-router-dom";
import CodeHighlightWithCopy from "components/General/CodeHighlightWithCopy";

const { Title } = Typography;

const DisplayColor: React.FC<DisplayColorProps> = ({
	customLabel,
	label,
	customValue,
	value,
	format,
	title,
}) => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	const colorSearchParams = useSearchParams();
	const color = colorSearchParams?.[0].get("color");

	const isLabelMatchingFormat = label.toLocaleLowerCase() === format;
	const backgroundColor = isLabelMatchingFormat ? value : "";
	const textColor = isLabelMatchingFormat ? getTextColor(value) : "";
	const border = isLabelMatchingFormat ? `1px solid ${textColor}` : "";

	const classes = classNames(
		style.cd__container,
		isTransparent(backgroundColor)
			? style.cd__container_checkered
			: undefined
	);

	const containerStyle = {
		backgroundColor: color ? backgroundColor : colorBgContainer,
		border: color ? border : "none",
	};

	const titleStyle = {
		color: color ? textColor : colorText,
	};

	return (
		<div style={containerStyle} className={style.cd}>
			{title === "Colors" ? (
				<div className={classes}>
					<Title level={5} style={titleStyle}>
						{customLabel}: {color ? customValue : ""}
					</Title>
					<Clipboard
						text={value}
						clipboardComponent={ClipboardButton}
					/>
				</div>
			) : (
				<CodeHighlightWithCopy
					codeString={`${customLabel}: ${color ? customValue : ""}`}
					language="css"
				/>
			)}
		</div>
	);
};

export default DisplayColor;
