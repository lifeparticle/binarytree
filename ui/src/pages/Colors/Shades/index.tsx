import { useState, useEffect, useTransition } from "react";
import styles from "./Shades.module.scss";
import { Button, Card, Form, Space, Switch, Typography } from "antd";
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
import InputComponent from "components/General/InputComponent";
import CopyInput from "components/Layouts/CopyInput";

const { Title } = Typography;

const Shades: React.FC = () => {
	const [color, setColor] = useState<string>(DEFAULT_COLOR);
	const [shades, setShades] = useState<string[]>([]);
	const [numberOfShades, setNumberOfShades] =
		useState<number>(DEFAULT_NUM_SHADES);
	const [isPending, startTransition] = useTransition();
	const [mode, setMode] = useState("darkest");

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

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	const handleNumberOfShadesChange = (num: number | null) => {
		if (num) setNumberOfShades(num);
	};

	return (
		<Card className={styles.shades}>
			<Space className={styles.shades__inputs}>
				<Form layout="vertical">
					<Space>
						<CopyInput>
							<InputComponent
								label="Color"
								placeholder="Color"
								value={color}
								onChange={handleColorChange}
								type="text"
							/>
						</CopyInput>

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

						<CopyInput>
							<InputComponent
								value={numberOfShades}
								label="Number of shades"
								onChange={handleNumberOfShadesChange}
								placeholder="Number of shades"
								precision={0}
								step={1}
								min={MIN_SHADES}
								max={MAX_SHADES}
								type="number"
							/>
						</CopyInput>
						<Switch
							checkedChildren="Darkest"
							unCheckedChildren="Lightest"
							defaultChecked
							onChange={(checked) =>
								setMode(checked ? "darkest" : "lightest")
							}
						/>

						<Button
							onClick={() => setInputs("", 0)}
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

			{color && !!numberOfShades && (
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
		</Card>
	);
};

export default Shades;
