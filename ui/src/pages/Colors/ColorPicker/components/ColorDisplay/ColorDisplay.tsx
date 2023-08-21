import { Typography } from "antd";
import style from "./ColorDisplay.module.scss";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { classNames, getTextColor, isTransparent } from "lib/utils/helper";

const { Title } = Typography;

interface ColorDisplayProps {
	customLabel: string;
	label: string;
	customValue: string;
	value: string;
	format: string;
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({
	customLabel,
	label,
	customValue,
	value,
	format,
}) => {
	console.log(isTransparent(value));

	const bg = label.toLocaleLowerCase() === format ? value : "";

	console.log("bg", bg);

	const classes = classNames(
		style.cd,
		isTransparent(bg) ? style.cd__checkered : undefined
	);

	return (
		<div
			className={classes}
			style={{
				backgroundColor: bg,
				border:
					label.toLocaleLowerCase() === format
						? `1px solid ${getTextColor(value)}`
						: "",
			}}
		>
			<Title
				level={5}
				style={{
					color:
						label.toLocaleLowerCase() === format
							? getTextColor(value)
							: "",
				}}
			>
				{customLabel}: {customValue}
			</Title>
			<Clipboard text={value} clipboardComponent={ClipboardButton} />
		</div>
	);
};

export default ColorDisplay;
