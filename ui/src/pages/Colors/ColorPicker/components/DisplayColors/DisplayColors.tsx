import { Card, Space } from "antd";
import { EXTENDED_DATA_OPTIONS } from "pages/Colors/ColorPicker/utils/constant";
import ColorDisplay from "pages/Colors/ColorPicker/components/ColorDisplay/ColorDisplay";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import style from "./DisplayColors.module.scss";

interface DisplayProps {
	colors: {
		[key: string]: string;
	};
	format: string;
	displayType: "variables" | "colors" | "use-variables";
	title: string;
}

const DisplayColors: React.FC<DisplayProps> = ({
	colors,
	displayType,
	format,
	title,
}) => {
	const determineLabel = (optionValue: string, optionLabel: string) => {
		switch (displayType) {
			case "variables":
				return `--color-${optionValue}`;
			case "use-variables":
				return "background-color";
			default:
				return optionLabel;
		}
	};

	const determineValue = (optionValue: string) => {
		return displayType === "use-variables"
			? `var(--color-${optionValue})`
			: colors[optionValue];
	};

	const generateClipboardText = () => {
		switch (displayType) {
			case "variables":
				return EXTENDED_DATA_OPTIONS.map(
					(option) =>
						`--color-${option.value}: ${colors[option.value]};`
				).join("\n");

			case "use-variables":
				return EXTENDED_DATA_OPTIONS.map(
					(option) => `var(--color-${option.value})`
				).join("\n");

			default:
				return Object.values(colors).join("\n");
		}
	};

	return (
		<Card bordered={false} title={title}>
			<Space direction="vertical" className={style.dp}>
				{EXTENDED_DATA_OPTIONS.map(({ value, label }) => (
					<ColorDisplay
						key={value}
						customLabel={determineLabel(value, label)}
						label={label}
						customValue={determineValue(value)}
						value={colors[value]}
						format={format}
					/>
				))}
				<Clipboard
					text={generateClipboardText()}
					label="Copy All"
					clipboardComponent={ClipboardButton}
				/>
			</Space>
		</Card>
	);
};

export default DisplayColors;
