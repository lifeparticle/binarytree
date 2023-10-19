import { Tag } from "antd";
import { DATA_OPTIONS } from "pages/Colors/ColorPicker/utils/constants";
import { FormatType } from "pages/Colors/ColorPicker/utils/types";
import style from "pages/Colors/ColorPicker/ColorPicker.module.scss";

const ColorFormatTags = ({
	currentFormat,
	onSelect,
}: {
	currentFormat: FormatType;
	onSelect: (format: FormatType) => void;
}) => {
	return DATA_OPTIONS.map((option) => (
		<Tag
			onClick={() => onSelect(option.value)}
			color={currentFormat === option.value ? "success" : "default"}
			key={option.value}
			className={style.cf}
			aria-label={`select ${option.label}`}
		>
			{option.label}
		</Tag>
	));
};

export default ColorFormatTags;
