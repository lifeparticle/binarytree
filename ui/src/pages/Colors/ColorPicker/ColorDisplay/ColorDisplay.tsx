import { Typography } from "antd";
import style from "./ColorDisplay.module.scss";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import tinycolor from "tinycolor2";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

const { Title } = Typography;

interface ColorDisplayProps {
	label: string;
	value: string;
	format: string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({
	label,
	value,
	format,
}) => {
	const labelParts = label.toLocaleLowerCase().split("-");
	const lastLabelPart =
		labelParts.length > 0 ? labelParts[labelParts.length - 1] : label;
	const isFormatMatched = format.toLocaleLowerCase() === lastLabelPart;

	const textColor = tinycolor(value).isDark() ? "white" : "black";

	return (
		<div
			className={style.cd}
			style={{
				backgroundColor: isFormatMatched ? value : "",
			}}
		>
			<Title
				level={4}
				style={{ color: isFormatMatched ? textColor : "" }}
			>
				{label}: {value}
			</Title>
			<Clipboard text={value} clipboardComponent={ClipboardButton} />
		</div>
	);
};

export default ColorDisplay;
