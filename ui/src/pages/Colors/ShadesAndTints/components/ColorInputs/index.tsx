import InputComponent from "components/General/InputComponent";
import {
	MAX_SHADES,
	MIN_SHADES,
	OUTPUT_FORMAT,
} from "pages/Colors/ShadesAndTints/utils/constants";
import { Button, Card, Form, Select, Space } from "antd";
import { ColorPicker as CP } from "@mantine/core";
import styles from "./ColorInputs.module.scss";
import { ColorInputsProps } from "pages/Colors/ShadesAndTints/utils/types";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { formatShades, generateRandomColor } from "../../utils/helper";
import Icon from "components/General/Icon";

const ColorInputs: React.FC<ColorInputsProps> = ({
	color,
	handleColorChange,
	handleNumberOfShadesChange,
	setColor,
	numberOfShades,
	handleOutputFormatChange,
	option,
	shades,
}) => {
	return (
		<Card className={styles.ci}>
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
					<Form.Item label="Output Format">
						<Select
							size="large"
							value={option}
							defaultActiveFirstOption
							onSelect={(_, option) =>
								handleOutputFormatChange(option)
							}
							options={OUTPUT_FORMAT}
						/>
					</Form.Item>
					<Clipboard
						text={formatShades(shades, option)}
						clipboardComponent={ClipboardButton}
					/>
					<Button
						icon={<Icon name="RefreshCcw" />}
						size="large"
						onClick={() => setColor(generateRandomColor())}
					/>
				</Space>
			</Form>
		</Card>
	);
};

export default ColorInputs;
