import {
	MAX_SHADES,
	MIN_SHADES,
	OUTPUT_FORMAT,
	SEGMENTED_OPTIONS,
} from "pages/Colors/ShadesAndTints/utils/constants";
import { Card, Form, Space } from "antd";
import { Clipboard } from "components/ComponentInjector";
import {
	formatShades,
	generateRandomColor,
} from "pages/Colors/ShadesAndTints/utils/helper";
import { useEffect, useState } from "react";
import {
	ColorPickerWithInput,
	Icon,
	ResponsiveButton,
	ResponsiveInputWithLabel,
	ResponsiveSegementWithLabel,
	ResponsiveSelectWithLabel,
} from "components/General";
import { ChangeEvent } from "react";
import { SelectOption } from "pages/Colors/ShadesAndTints/utils/types";
import { ClipboardButton } from "components/InjectedComponent";

interface ColorInputsProps {
	color: string;
	handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handlePercentageChange: (value: number | null) => void;
	setColor: (color: string) => void;
	percentage: number;
	handleOutputFormatChange: (option: SelectOption) => void;
	option: SelectOption;
	shades: string[];
	tints: string[];
}

const ColorInputs: React.FC<ColorInputsProps> = ({
	color,
	handleColorChange,
	handlePercentageChange,
	setColor,
	percentage,
	handleOutputFormatChange,
	option,
	shades,
	tints,
}) => {
	const [order, setOrder] = useState(SEGMENTED_OPTIONS[0].value);
	const [clipboardText, setClipboardText] = useState("");

	useEffect(() => {
		const generateClipboardText = () => {
			if (order === "Shades") {
				setClipboardText(formatShades(shades, option));
			} else if (order === "Tints") {
				setClipboardText(formatShades(tints, option));
			} else if (order === "All") {
				setClipboardText(formatShades([...shades, ...tints], option));
			}
		};

		generateClipboardText();
	}, [order, option, shades, tints]);

	return (
		<Card>
			<Form layout="vertical">
				<Space align="end">
					<ColorPickerWithInput
						value={color}
						setValue={handleColorChange}
						setColor={setColor}
						label="Color"
					/>
					<ResponsiveInputWithLabel
						value={percentage}
						label="Percentage"
						onChange={handlePercentageChange}
						placeholder="Shades"
						precision={0}
						step={1}
						min={MIN_SHADES}
						max={MAX_SHADES}
						type="number"
						style={{ width: 90 }}
					/>
					<Form.Item>
						<ResponsiveButton
							icon={<Icon name="RefreshCcw" />}
							onClick={() => setColor(generateRandomColor())}
						/>
					</Form.Item>

					<ResponsiveSelectWithLabel
						label="Output separator"
						value={option.value}
						onSelect={(_, option) =>
							handleOutputFormatChange(option)
						}
						options={OUTPUT_FORMAT}
						defaultActiveFirstOption
					/>

					<ResponsiveSegementWithLabel
						label="Copy options"
						value={order}
						onChange={(value: string | number) =>
							setOrder(value as string)
						}
						options={SEGMENTED_OPTIONS}
					/>
					<Form.Item>
						<Clipboard
							text={clipboardText}
							clipboardComponent={ClipboardButton}
						/>
					</Form.Item>
				</Space>
			</Form>
		</Card>
	);
};

export default ColorInputs;
