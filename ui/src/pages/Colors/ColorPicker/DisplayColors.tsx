import { Card, Space } from "antd";
import { EXTENDED_DATA_OPTIONS } from "./constant";
import ColorDisplay from "./ColorDisplay/ColorDisplay";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

interface DisplayProps {
	colors: {
		[key: string]: string;
	};
	format: string;
	displayType: "variables" | "colors";
}

const DisplayColors: React.FC<DisplayProps> = ({
	colors,
	displayType,
	format,
}) => {
	const displayedOptions = EXTENDED_DATA_OPTIONS;
	const clipboardText =
		displayType === "variables"
			? displayedOptions
					.map(
						(option) =>
							`--color-${option.value}: ${colors[option.value]};`
					)
					.join("\n")
			: Object.values(colors).join("\n");

	return (
		<Card bordered={false}>
			<Space direction="vertical">
				{displayedOptions.map((option) => (
					<ColorDisplay
						key={option.value}
						label={
							displayType === "variables"
								? `--color-${option.value}`
								: option.label
						}
						value={colors[option.value]}
						format={format}
					/>
				))}
				<Clipboard
					text={clipboardText}
					label="Copy All"
					clipboardComponent={ClipboardButton}
				/>
			</Space>
		</Card>
	);
};

export default DisplayColors;
