import { Typography } from "antd";
import style from "./DisplayColor.module.scss";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { classNames, getTextColor, isTransparent } from "lib/utils/helper";
import { DisplayColorProps } from "pages/Colors/ColorPicker/utils/types";

const { Title } = Typography;

const DisplayColor: React.FC<DisplayColorProps> = ({
	customLabel,
	label,
	customValue,
	value,
	format,
}) => {
	const isLabelMatchingFormat = label.toLocaleLowerCase() === format;
	const backgroundColor = isLabelMatchingFormat ? value : "";
	const textColor = isLabelMatchingFormat ? getTextColor(value) : "";
	const border = isLabelMatchingFormat ? `1px solid ${textColor}` : "";

	const classes = classNames(
		style.cd,
		isTransparent(backgroundColor) ? style.cd__checkered : undefined
	);

	return (
		<div
			className={classes}
			style={{
				backgroundColor,
				border,
			}}
		>
			<Title level={5} style={{ color: textColor }}>
				{customLabel}: {customValue}
			</Title>
			<Clipboard text={value} clipboardComponent={ClipboardButton} />
		</div>
	);
};

export default DisplayColor;
