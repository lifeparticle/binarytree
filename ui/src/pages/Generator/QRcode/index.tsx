import { Card, Form, QRCode, Input, Badge, Space } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import React, { ChangeEvent, useEffect, useState } from "react";
import { downloadQRCode } from "./utils/helper";
import style from "./QRcode.module.scss";
import DropdownDownloadButton from "components/General/DropdownDownloadButton";
import Warning from "components/General/Warning";
import { detectData } from "pages/Tools/Sorting/utils/helper";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";

const { TextArea } = Input;

const QRcode: React.FC = () => {
	const [value, setValue] = useState("");
	const [dataType, setDataType] = useState("");
	const [color, setColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#FFFFFF");
	const [bordered, setBordered] = useState(false);
	const [icon, setIcon] = useState<string | undefined>(undefined);
	const [size, setSize] = useState(200);

	useEffect(() => {
		setDataType(detectData(value));
	}, [value]);

	const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onload = () => {
				setIcon(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<PageGrid>
			<Card>
				<Form layout="vertical">
					<Form.Item
						label={
							<div className={style.qrcode__label}>
								<p>{`Input data`}</p>
								<Badge
									text={`${dataType} detected`}
									color={
										dataType === "No data"
											? "yellow"
											: "green"
									}
								/>
							</div>
						}
					>
						<TextArea
							value={value}
							rows={7}
							onChange={(e) => setValue(e.target.value)}
							data-gramm={false}
							allowClear
						/>
					</Form.Item>
					<PageGrid>
						<ColorPickerWithInput
							value={color}
							setValue={(e) => setColor(e.target.value)}
							setColor={setColor}
							label="Color"
						/>
						<ColorPickerWithInput
							value={bgColor}
							setValue={(e) => setBgColor(e.target.value)}
							setColor={setBgColor}
							label="Color"
						/>
					</PageGrid>

					<Form.Item
						label="Border"
						valuePropName="checked"
						tooltip="Add border to QR code"
					>
						<Input
							type="checkbox"
							onChange={(e) => setBordered(e.target.checked)}
						/>
					</Form.Item>

					<Form.Item
						label="Border"
						valuePropName="checked"
						tooltip="Add border to QR code"
					>
						<ResponsiveInputWithLabel
							label="Image height"
							placeholder="Height"
							value={size}
							onChange={(val) => val && setSize(val)}
							min={0}
							type="number"
						/>
					</Form.Item>

					<Form.Item label="Upload Image">
						<Input
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
						/>
					</Form.Item>
				</Form>
			</Card>
			<Card className={style.qrcode__output}>
				{value.length > 0 ? (
					<Space
						direction="vertical"
						align="center"
						size={"large"}
						id="myqrcode"
					>
						<QRCode
							value={value}
							color={color}
							bgColor={bgColor}
							bordered={bordered}
							size={size}
							iconSize={size / 4}
							icon={icon}
						/>
						<DropdownDownloadButton
							handleDownload={downloadQRCode}
						/>
					</Space>
				) : (
					<Warning
						text="There is no data for generating QR code, please provide data
					first."
					/>
				)}
			</Card>
		</PageGrid>
	);
};

export default QRcode;
