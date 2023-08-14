import { Typography } from "antd";
import style from "./ColorPicker.module.scss";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
const { Title } = Typography;

const ColorDisplay: React.FC<{ label: string; value: string }> = ({
	label,
	value,
}) => (
	<div className={style.cp__result}>
		<Title level={4}>
			{label}: {value}
		</Title>
		<Clipboard text={value} clipboardComponent={ClipboardButton} />
	</div>
);

export default ColorDisplay;
