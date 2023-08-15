import { Typography } from "antd";
import style from "./ColorDisplay.module.scss";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
import { getTextColor } from "lib/utils/helper";

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
	return (
		<div
			className={style.cd}
			style={{
				backgroundColor:
					label.toLocaleLowerCase() === format ? value : "",
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
