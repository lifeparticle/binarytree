import InputComponent from "components/General/InputComponent";
import {
	MAX_SHADES,
	MIN_SHADES,
	OUTPUT_FORMAT,
	SEGMENTED_OPTIONS,
} from "pages/Colors/ShadesAndTints/utils/constants";
import { Card, Form, Space } from "antd";
import { ColorPicker as CP } from "@mantine/core";
import styles from "./ColorInputs.module.scss";
import { ColorInputsProps } from "pages/Colors/ShadesAndTints/utils/types";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import {
	formatShades,
	generateRandomColor,
} from "pages/Colors/ShadesAndTints/utils/helper";
import Icon from "components/General/Icon";
import { useEffect, useState } from "react";
import SelectComponent from "components/General/SelectComponent";
import Button from "components/General/Button";
import SegmentComponent from "components/General/SegmentComponent";

const ColorInputs: React.FC<ColorInputsProps> = ({
	color,
	handleColorChange,
	handleNumberOfShadesChange,
	setColor,
	numberOfShades,
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
		<Card className={styles.ci}>
			<Form layout="vertical">
				<Space align="end">
					<InputComponent
						label="Color"
						placeholder="Color"
						value={color}
						onChange={handleColorChange}
						type="text"
						style={{ width: 250 }}
						addonBefore={
							<div className={styles.ci__color}>
								<Card
									size="small"
									style={{ background: color }}
								/>
								<div className={styles.ci__color_dp}>
									<CP
										format="rgba"
										value={color}
										onChange={setColor}
										size="xl"
									/>
								</div>
							</div>
						}
					/>
					<InputComponent
						value={numberOfShades}
						label="Shades"
						onChange={handleNumberOfShadesChange}
						placeholder="Shades"
						precision={0}
						step={1}
						min={MIN_SHADES}
						max={MAX_SHADES}
						type="number"
						style={{ width: 90 }}
					/>

					<SelectComponent
						value={option.value}
						onSelect={(_, option) =>
							handleOutputFormatChange(option)
						}
						options={OUTPUT_FORMAT}
						defaultActiveFirstOption
					/>

					<SegmentComponent
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

					<Form.Item>
						<Button
							icon={<Icon name="RefreshCcw" />}
							onClick={() => setColor(generateRandomColor())}
						/>
					</Form.Item>
				</Space>
			</Form>
		</Card>
	);
};

export default ColorInputs;
