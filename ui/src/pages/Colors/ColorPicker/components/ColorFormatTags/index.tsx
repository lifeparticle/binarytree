import { Tag } from "antd";
import { DATA_OPTIONS } from "pages/Colors/ColorPicker/utils/constant";
import { FormatType } from "pages/Colors/ColorPicker/utils/types";

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
			style={{ cursor: "pointer" }}
		>
			{option.label}
		</Tag>
	));
};

export default ColorFormatTags;
