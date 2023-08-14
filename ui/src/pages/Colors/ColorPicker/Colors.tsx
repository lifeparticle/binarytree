import { Card, Space } from "antd";
import { DATA_OPTIONS } from "./constant";
import ColorDisplay from "./ColorDisplay";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

interface DisplayProps {
	colors: {
		[key: string]: string;
	};
	format?: string;
	displayType: "variables" | "colors";
}

const DisplayColors: React.FC<DisplayProps> = ({
	colors,
	format,
	displayType,
}) => {
	let displayedOptions;
	let clipboardText;

	if (displayType === "variables") {
		displayedOptions = DATA_OPTIONS;
		clipboardText = DATA_OPTIONS.map(
			(option) => `--color-${option.value}: ${colors[option.value]};`
		).join("\n");
	} else {
		displayedOptions = DATA_OPTIONS.filter(
			(option) => option.value !== format
		);
		clipboardText = Object.values(colors).join("\n");
	}

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
