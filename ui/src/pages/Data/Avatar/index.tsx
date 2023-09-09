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
import {
	AVATAR_SHAPE_SEGMENTED_OPTIONS,
	AvatarShape,
	AvatarShapeType,
} from "./utils/constants";
import InputGrid from "components/Layouts/InputGrid";
import style from "./Avatar.module.scss";

const Avatar = () => {
	const [text, setText] = useState<string>("BT");
	const [textColor, setTextColor] = useState<string>(
		"rgba(255, 255, 255, 1)"
	);
	const [bgColor, setBgColor] = useState<string>("rgba(0, 0, 0, 0.25)");
	const [shapeType, setShapeType] = useState<AvatarShapeType>(
		AvatarShape.Circle
	);
	const [avatarSize, setAvatarSize] = useState<number>(200);
	const [fontSize, setFontSize] = useState<number>(50);
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
						<ResponsiveInputWithLabel
							label="Avatar size"
							placeholder="Enter avatar size"
							value={avatarSize}
							onChange={(val) => setAvatarSize(val || 0)}
							type="number"
						/>

						<ResponsiveInputWithLabel
							label="Font size"
							placeholder="Enter font size"
							value={fontSize}
							onChange={(val) => setFontSize(val || 0)}
							type="number"
						/>
					</InputGrid>

					<InputGrid>
						<ResponsiveSegementWithLabel
							value={shapeType}
							label="Avatar shape"
							options={AVATAR_SHAPE_SEGMENTED_OPTIONS}
							onChange={(value) => {
								if (value) {
									setShapeType(value as AvatarShapeType);
								}
							}}
						/>
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
					</InputGrid>
				</Form>
			</Card>

			<Card className={style.avatar__output}>
				<Space direction="vertical" align="center" size={"large"}>
					<AntAvatar
						ref={domEl}
						size={avatarSize}
						shape={shapeType as "circle" | "square"}
						style={{
							backgroundColor: bgColor,
							color: textColor,
							borderRadius:
								shapeType === "custom"
									? `${customBorderRadius}px`
									: "",
							fontSize,
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
