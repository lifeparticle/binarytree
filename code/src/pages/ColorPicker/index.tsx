import style from "./ColorPicker.module.scss";
import { useState } from "react";
import { ColorPicker as CP } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Button, Select } from "antd";

const ColorPicker: React.FC = () => {
	const [color, setColor] = useState("rgba(47, 119, 150, 0.7)");
	const [format, setFormat] = useState<
		"hex" | "rgba" | "rgb" | "hsl" | "hsla"
	>("hex");
	const clipboard = useClipboard({ timeout: 500 });

	return (
		<div className={style.cp}>
			<Select
				defaultValue={format}
				onChange={(val: any) => setFormat(val)}
				style={{ width: 200 }}
				options={[
					{ value: "hex", label: "HEX" },
					{ value: "rgba", label: "RGBA" },
					{ value: "rgb", label: "RGB" },
					{ value: "hsl", label: "HSL" },
					{ value: "hsla", label: "HSLA" },
				]}
			/>
			<CP
				format={format}
				value={color}
				onChange={(val) => setColor(val)}
				size="xl"
			/>
			<h1 color="blue">{color}</h1>
			<Button onClick={() => clipboard.copy(color)}>
				{clipboard.copied ? "Copied" : "Copy"}
			</Button>
		</div>
	);
};

export default ColorPicker;
