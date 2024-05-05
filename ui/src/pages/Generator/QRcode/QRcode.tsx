import { FC, useEffect, useState } from "react";
import { PageGrid } from "components/Layouts";
import { DataDetection } from "utils/helper-classes/DataDetection";
import UserInputs from "./components/UserInputs";
import Output from "./components/Output";
import { downloadQRCode } from "./helper";

const detection = new DataDetection(new Set(["number", "string", "url"]));

const QRcode: FC = () => {
	const [value, setValue] = useState("");
	const [dataType, setDataType] = useState("");
	const [color, setColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#FFFFFF");
	const [bordered, setBordered] = useState(false);
	const [multiLine, setMultiLine] = useState(false);
	const [icon, setIcon] = useState<string>("");
	const [size, setSize] = useState(200);
	const [iconSize, setIconSize] = useState(size / 4);

	useEffect(() => {
		detection.setData(value);
		setDataType(detection.detect());
	}, [value]);

	return (
		<PageGrid>
			<UserInputs
				value={value}
				setValue={setValue}
				dataType={dataType}
				color={color}
				setColor={setColor}
				bgColor={bgColor}
				setBgColor={setBgColor}
				size={size}
				setSize={setSize}
				setBordered={setBordered}
				setMultiLine={setMultiLine}
				iconSize={iconSize}
				setIconSize={setIconSize}
				icon={icon}
				setIcon={setIcon}
			/>
			<Output
				value={value}
				color={color}
				bgColor={bgColor}
				bordered={bordered}
				multiLine={multiLine}
				size={size}
				iconSize={iconSize}
				icon={icon}
				downloadQRCode={downloadQRCode}
			/>
		</PageGrid>
	);
};

export default QRcode;
