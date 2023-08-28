import { useState, useEffect, useTransition } from "react";
import styles from "./Shades.module.scss";
import { Button, Card, Checkbox, Form, Select, Space, Typography } from "antd";
import tinycolor from "tinycolor2";
import { getTextColor } from "lib/utils/helper";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import { ColorPicker as CP } from "@mantine/core";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import {
	DEFAULT_COLOR,
	DEFAULT_NUM_SHADES,
	MAX_SHADES,
	MIN_SHADES,
	OUTPUT_FORMAT,
} from "./utils/constants";
import InputComponent from "components/General/InputComponent";
import { formatShades } from "./utils/helper";
import { SelectOption } from "./utils/types";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { Title } = Typography;

const Shades: React.FC = () => {
	const [color, setColor] = useState<string>(DEFAULT_COLOR);
	const [shades, setShades] = useState<string[]>([]);
	const [numberOfShades, setNumberOfShades] =
		useState<number>(DEFAULT_NUM_SHADES);
	const [isPending, startTransition] = useTransition();
	const [mode, setMode] = useState("darkest");
	const [output, setOutput] = useState("");
	const [option, setOption] = useState<SelectOption>(OUTPUT_FORMAT[0]);

	useCombinedKeyPress(
		() => setInputs(DEFAULT_COLOR, DEFAULT_NUM_SHADES),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(
		() => setInputs(DEFAULT_COLOR, DEFAULT_NUM_SHADES),
		["ControlLeft", "KeyR"]
	);

	const setInputs = (color: string, numberOfShades: number) => {
		setColor(color);
		setNumberOfShades(numberOfShades);
	};

	useEffect(() => {
		const generateShadesForColor = (
			selectedColor: string,
			count: number | null
		) => {
			if (!selectedColor || !count || count <= 0) return [];

			const step = 100 / (count - 1);

			if (mode === "darkest") {
				return [
					selectedColor,
					...Array.from({ length: count - 1 }, (_, i) =>
						tinycolor(selectedColor)
							.darken(step * (i + 1))
							.toString()
					),
				];
			} else {
				return [
					selectedColor,
					...Array.from({ length: count - 1 }, (_, i) =>
						tinycolor(selectedColor)
							.lighten(step * (i + 1))
							.toString()
					),
				];
			}
		};

		startTransition(() => {
			setShades(generateShadesForColor(color, numberOfShades));
		});
	}, [color, numberOfShades, mode]);

	const handleOutputFormatChange = (option: SelectOption) => {
		setOption(option);
	};

	useEffect(() => {
		setOutput(formatShades(shades, option));
	}, [option, shades]);

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	const handleNumberOfShadesChange = (num: number | null) => {
		if (num) setNumberOfShades(num);
	};

	return (
		<div className={styles.shades}>
			<Card>
				<Form layout="vertical">
					<Space>
						<InputComponent
							label="Color"
							placeholder="Color"
							value={color}
							onChange={handleColorChange}
							type="text"
							style={{ width: 250 }}
							addonBefore={
								<div className={styles.cardContainer}>
									<Card
										size="small"
										style={{ background: color }}
									/>
									<div className={styles.colorPickerDropdown}>
										<CP
											format="hex"
											value={color}
											onChange={setColor}
											size="xl"
										/>
									</div>
								</div>
							}
							addonAfter={
								<Checkbox
									onChange={(e: CheckboxChangeEvent) =>
										setMode(
											e.target.checked
												? "darkest"
												: "lightest"
										)
									}
									defaultChecked
								>
									Darkest
								</Checkbox>
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
					</Space>
				</Form>

				<Form layout="vertical">
					<Space>
						<Form.Item label="Output Format">
							<Select
								size="large"
								value={option}
								defaultActiveFirstOption
								style={{ width: "100%" }}
								onSelect={(_, option) =>
									handleOutputFormatChange(option)
								}
								options={OUTPUT_FORMAT}
							/>
						</Form.Item>
						<Clipboard
							text={output}
							clipboardComponent={ClipboardButton}
						/>
						<Button
							size="large"
							onClick={() => setInputs("", 0)}
							disabled={!color && !numberOfShades}
						>
							Clear
						</Button>
					</Space>
				</Form>
			</Card>

			{color && !!numberOfShades && (
				<Card className={styles.shades__container}>
					<div className={styles.shades__container_shades}>
						{isPending ? (
							<Title level={4}>Generating shades...</Title>
						) : (
							shades.map((shade, index) => (
								<Card
									key={shade}
									style={{
										backgroundColor: shade,
										color: getTextColor(shade),
									}}
								>
									<div
										className={
											styles.shades__container_shades_shade
										}
									>
										{index + 1}
										<Title
											level={4}
											style={{
												color: getTextColor(shade),
											}}
										>
											{shade}
										</Title>
										<Clipboard
											text={shade}
											clipboardComponent={ClipboardButton}
										/>
									</div>
								</Card>
							))
						)}
					</div>
				</Card>
			)}
		</div>
	);
};

export default Shades;
