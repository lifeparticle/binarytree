import { ColorPicker as CP } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Button, Card, Space, Tag, message } from "antd";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import style from "./ColorPicker.module.scss";

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
	const clipboard = useClipboard({ timeout: 500 });

	const [messageApi, contextHolder] = message.useMessage();

	const success = (color: string) => {
		navigator.clipboard.writeText(color);

		messageApi.open({
			type: "success",
			content: `Copied color : ${color} 👍`,
		});
	};

	return (
		<div className={style.cp}>
			{contextHolder}

			<Card
				bordered={false}
				style={{ maxWidth: "var(--bt-cp-card-width)" }}
			>
				<Space
					size={[0, 8]}
					wrap
					style={{ marginBottom: "var(--bt-size-24)" }}
				>
					{DATA_OPTIONS.map((option) => (
						<Tag
							onClick={() => setFormat(option.value)}
							color={
								format === option.value ? "success" : "default"
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
					<Button
						onClick={() => {
							clipboard.copy(color);
							success(color);
						}}
						type="default"
						className={style.cp__result__button}
					>
						{clipboard.copied ? (
							<Check size={20} />
						) : (
							<Copy size={20} />
						)}
					</Button>
				</div>
			</Card>
		</div>
	);
};

export default ColorPicker;
