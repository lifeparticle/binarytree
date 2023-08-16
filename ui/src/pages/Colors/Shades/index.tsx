import { useState, useEffect, useTransition } from "react";
import styles from "./Shades.module.scss";
import { Button, Card, Input, InputNumber, Space, Typography } from "antd";
import tinycolor from "tinycolor2";
import { getTextColor } from "lib/utils/helper";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import { ColorPicker as CP } from "@mantine/core";
import Clipboard from "components/RenderProps/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

const { Title } = Typography;

const DEFAULT_COLOR = "#FFF";
const DEFAULT_NUM_SHADES = 10;
const MAX_SHADES = 256;
const MIN_SHADES = 1;

const Shades: React.FC = () => {
	const [color, setColor] = useState<string>(DEFAULT_COLOR);
	const [shades, setShades] = useState<string[]>([]);
	const [numberOfShades, setNumberOfShades] = useState<number | null>(null);
	const [isPending, startTransition] = useTransition();

	useCombinedKeyPress(
		() => setInputs(DEFAULT_COLOR, DEFAULT_NUM_SHADES),
		["ControlLeft", "KeyE"]
	);
	useCombinedKeyPress(() => setInputs("", null), ["ControlLeft", "KeyC"]);

	const setInputs = (color: string, numberOfShades: number | null) => {
		setColor(color);
		setNumberOfShades(numberOfShades);
	};

	const generateShadesForColor = (
		selectedColor: string,
		count: number | null
	) => {
		if (!selectedColor || !count || count <= 0) return [];

		return Array.from({ length: count }, (_, i) =>
			tinycolor(selectedColor)
				.darken((100 / count) * (i + 1))
				.toString()
		);
	};

	useEffect(() => {
		startTransition(() => {
			setShades(generateShadesForColor(color, numberOfShades));
		});
	}, [color, numberOfShades]);

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};

	const handleNumberOfShadesChange = (num: number | null) => {
		setNumberOfShades(num || null);
	};

	return (
		<div className={styles.shades}>
			<Space className={styles.shades__inputs}>
				<Input
					placeholder="Enter Color"
					value={color}
					onChange={handleColorChange}
				/>
				<div className={styles.cardContainer}>
					<Card size="small" style={{ background: color }}></Card>
					<div className={styles.colorPickerDropdown}>
						<CP
							format="hex"
							value={color}
							onChange={setColor}
							size="xl"
						/>
					</div>
				</div>
				<InputNumber
					style={{ width: "100%" }}
					precision={0}
					min={MIN_SHADES}
					max={MAX_SHADES}
					step={1}
					placeholder="Enter pixel value"
					value={numberOfShades}
					onChange={handleNumberOfShadesChange}
				/>
				<Button
					onClick={() => setInputs("", null)}
					disabled={!color && !numberOfShades}
				>
					Clear
				</Button>
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
