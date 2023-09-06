import { saveAs } from "file-saver";
import { toPng } from "html-to-image";
import { Card, Form, Slider, Avatar as AntAvatar, Space } from "antd";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import {
	ResponsiveButton,
	ResponsiveInputWithLabel,
	ResponsiveSegementWithLabel,
} from "components/General/FormComponents";
import PageGrid from "components/Layouts/PageGrid";
import { useRef, useState } from "react";
import { AVATAR_SHAPE_SEGMENTED_OPTIONS, AvatarShape } from "./utils/constants";
import InputGrid from "components/Layouts/InputGrid";
import style from "./Avatar.module.scss";

const Avatar = () => {
	const [text, setText] = useState<string>("AR");
	const [textColor, setTextColor] = useState<string>("");
	const [bgColor, setBgColor] = useState<string>("");
	const [shapeType, setShapeType] = useState<AvatarShape>(AvatarShape.Circle);
	const [size, setSize] = useState<number>(50);
	const [customBorderRadius, setCustomBorderRadius] = useState<number>(0);

	const domEl = useRef<HTMLDivElement>(null);

	const onButtonClick = async () => {
		if (!domEl.current || text.length === 0) return;

		const dataUrl = await toPng(domEl.current);

		const blob = await fetch(dataUrl).then((res) => res.blob());
		saveAs(blob, `image-${Date.now()}.png`);
	};

	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<ResponsiveInputWithLabel
						label="Avatar text"
						placeholder="Enter avatar text"
						value={text}
						onChange={(val) => setText(val.target.value)}
						type="text"
					/>

					<InputGrid>
						<ColorPickerWithInput
							label="Text color"
							value={textColor}
							setValue={(e) => setTextColor(e.target.value)}
							setColor={setTextColor}
						/>
						<ColorPickerWithInput
							label="Background color"
							value={bgColor}
							setValue={(e) => setBgColor(e.target.value)}
							setColor={setBgColor}
						/>
					</InputGrid>

					<InputGrid>
						<ResponsiveSegementWithLabel
							value={shapeType}
							label="Avatar shape"
							options={AVATAR_SHAPE_SEGMENTED_OPTIONS}
							onChange={(value) => {
								if (value) {
									setShapeType(value as AvatarShape);
								}
							}}
						/>

						<ResponsiveInputWithLabel
							label="Avatar size"
							placeholder="Enter avatar size"
							value={size}
							onChange={(val) => setSize(val || 0)}
							type="number"
						/>
					</InputGrid>

					{shapeType === AvatarShape.Custom && (
						<Form.Item label="Avatar border radius">
							<Slider
								defaultValue={0}
								value={customBorderRadius}
								onChange={(value) =>
									value !== null &&
									setCustomBorderRadius(value)
								}
							/>
						</Form.Item>
					)}
				</Form>
			</Card>

			<Card className={style.avatar__output}>
				<Space direction="vertical" align="center" size={"large"}>
					<AntAvatar
						ref={domEl}
						size={size}
						shape={
							shapeType as AvatarShape.Circle | AvatarShape.Square
						}
						style={{
							backgroundColor: bgColor,
							color: textColor,
							borderRadius:
								shapeType === "custom"
									? `${customBorderRadius}px`
									: "",
						}}
					>
						{text}
					</AntAvatar>

					<ResponsiveButton onClick={onButtonClick}>
						Download avatar
					</ResponsiveButton>
				</Space>
			</Card>
		</PageGrid>
	);
};

export default Avatar;
