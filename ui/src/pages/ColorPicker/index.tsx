import { ColorPicker as CP } from "@mantine/core";
import { Card, Space, Tag } from "antd";
import { useState } from "react";
import style from "./ColorPicker.module.scss";
import ClipboardButton from "atoms/ClipboardButton";

type FormatType = "hex" | "rgba" | "rgb" | "hsl" | "hsla";
type DataType = {
	value: FormatType;
	label: string;
};

const DATA_OPTIONS: DataType[] = [
	{ value: "hex", label: "HEX" },
	{ value: "rgba", label: "RGBA" },
	{ value: "rgb", label: "RGB" },
	{ value: "hsl", label: "HSL" },
	{ value: "hsla", label: "HSLA" },
];

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
						<ClipboardButton text={color} />
					</div>
				</Space>
			</Card>
		</div>
	);
};

export default ColorPicker;
