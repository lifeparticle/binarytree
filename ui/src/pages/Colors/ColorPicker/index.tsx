import { ColorPicker as CP } from "@mantine/core";
import { Card, Space, Tag } from "antd";
import { useState } from "react";
import style from "./ColorPicker.module.scss";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
import Clipboard from "components/Hoc/Clipboard/Clipboard";

export const formatLabels = ["HEX", "RGBA", "RGB", "HSL", "HSLA"] as const;

type FormatType = Lowercase<(typeof formatLabels)[number]>;

const DATA_OPTIONS: { value: FormatType; label: string }[] = formatLabels.map(
	(label) => ({
		value: label.toLowerCase() as FormatType,
		label: label,
	})
);

const ColorPicker: React.FC = () => {
	const [color, setColor] = useState("rgba(47, 119, 150, 0.7)");
	const [format, setFormat] = useState<FormatType>("hex");

	return (
		<div className={style.cp}>
			<Card bordered={false}>
				<Space size="large" direction="vertical" wrap>
					<Space size="small" direction="horizontal" wrap>
						{DATA_OPTIONS.map((option) => (
							<Tag
								onClick={() => setFormat(option.value)}
								color={
									format === option.value
										? "success"
										: "default"
								}
								key={option.value}
								style={{ cursor: "pointer" }}
							>
								{option.label}
							</Tag>
						))}
					</Space>

					<CP
						format={format}
						value={color}
						onChange={(val: string) => setColor(val)}
						size="xl"
					/>
					<div className={style.cp__result}>
						<div className={style.cp__result__color}>{color}</div>
						<Clipboard
							text={color}
							clipboardComponent={ClipboardButton}
						/>
					</div>
				</Space>
			</Card>
		</div>
	);
};

export default ColorPicker;
