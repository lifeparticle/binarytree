import { useState, useEffect, useTransition } from "react";
import styles from "./Shades.module.scss";
import {
	Button,
	Card,
	Form,
	Input,
	InputNumber,
	Space,
	Switch,
	Typography,
} from "antd";
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
} from "./utils/constants";

const { Title } = Typography;

const Shades: React.FC = () => {
	const [color, setColor] = useState<string>(DEFAULT_COLOR);
	const [shades, setShades] = useState<string[]>([]);
	const [numberOfShades, setNumberOfShades] = useState<number | null>(null);
	const [isPending, startTransition] = useTransition();
	const [mode, setMode] = useState("darkest"); // Add this state for switch

	useCombinedKeyPress(
		() => setInputs(DEFAULT_COLOR, DEFAULT_NUM_SHADES),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setInputs("", null), ["ControlLeft", "KeyR"]);

	const setInputs = (color: string, numberOfShades: number | null) => {
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

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	const handleNumberOfShadesChange = (num: number | null) => {
		setNumberOfShades(num || null);
	};

	return (
		<div className={styles.shades}>
			<Space className={styles.shades__inputs}>
				<Form layout="vertical">
					<Space>
						<Form.Item label="Color">
							<Space>
								<Input
									size="large"
									placeholder="Color"
									value={color}
									onChange={handleColorChange}
									allowClear
								/>

								<div className={styles.cardContainer}>
									<Card
										size="small"
										style={{ background: color }}
									></Card>
									<div className={styles.colorPickerDropdown}>
										<CP
											format="hex"
											value={color}
											onChange={setColor}
											size="xl"
										/>
									</div>
								</div>
							</Space>
						</Form.Item>
						<Form.Item label="Number of shades">
							<InputNumber
								size="large"
								style={{ width: "100%" }}
								precision={0}
								min={MIN_SHADES}
								max={MAX_SHADES}
								step={1}
								placeholder="Number of shades"
								value={numberOfShades}
								onChange={handleNumberOfShadesChange}
							/>
						</Form.Item>
						<Switch
							checkedChildren="Darkest"
							unCheckedChildren="Lightest"
							defaultChecked
							onChange={(checked) =>
								setMode(checked ? "darkest" : "lightest")
							}
						/>

						<Button
							onClick={() => setInputs("", null)}
							disabled={!color && !numberOfShades}
						>
							Clear
						</Button>

						<Clipboard
							text={shades.join(" ")}
							clipboardComponent={ClipboardButton}
						/>
					</Space>
				</Form>
			</Space>

			{color && numberOfShades && (
				<Card className={styles.shades__container}>
					<div className={styles.shades__container_shade}>
						{isPending ? (
							<Title level={4}>Generating shades...</Title>
						) : (
							shades.map((shade, index) => (
								<Card
									key={index}
									style={{
										backgroundColor: shade,
										color: getTextColor(shade),
									}}
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
