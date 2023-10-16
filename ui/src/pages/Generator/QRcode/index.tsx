import { Card, Form, QRCode, Input, Badge, Space, Checkbox } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import React, { useEffect, useState } from "react";
import { downloadQRCode } from "./utils/helper";
import style from "./QRcode.module.scss";
import DropdownDownloadButton from "components/General/DropdownDownloadButton";
import Warning from "components/General/Warning";
import ColorPickerWithInput from "components/General/ColorPickerWithInput";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";
import { handleImageUpload } from "utils/helper-functions/files";
import QRCodeErrorBoundary from "./components/QRCodeErrorBoundary";
import { classNames } from "utils/helper-functions/string";
import { DataDetection } from "utils/helper-classes/ DataDetection";

const { TextArea } = Input;

const detection = new DataDetection(["number", "string", "url"]);

const QRcode: React.FC = () => {
	const [value, setValue] = useState("");
	const [dataType, setDataType] = useState("");
	const [color, setColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#FFFFFF");
	const [bordered, setBordered] = useState(false);
	const [icon, setIcon] = useState<string | undefined>(undefined);
	const [size, setSize] = useState(200);
	const [iconSize, setIconSize] = useState(size / 4);

	useEffect(() => {
		detection.setData(value);
		setDataType(detection.detect());
	}, [value]);

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
							placeholder="Enter input"
							allowClear
						/>
					</Form.Item>
					<Form.Item tooltip="Add border to QR code">
						<Checkbox
							type="checkbox"
							value="Border"
							onChange={(e) => setBordered(e.target.checked)}
						>
							Border
						</Checkbox>
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
							label="Background Color"
						/>
					</PageGrid>

					<PageGrid>
						<Form.Item>
							<ResponsiveInputWithLabel
								label="QR Code Size"
								placeholder="Height"
								value={size}
								onChange={(val) => val && setSize(val)}
								min={0}
								type="number"
							/>
						</Form.Item>

						<Form.Item>
							<ResponsiveInputWithLabel
								label="Icon  Size"
								placeholder="Height"
								value={iconSize}
								onChange={(val) => val && setIconSize(val)}
								min={0}
								type="number"
							/>
						</Form.Item>
					</PageGrid>

					<Form.Item label="Upload Iocn">
						<Input
							type="file"
							accept="image/*"
							onChange={(e) => handleImageUpload(e, setIcon)}
						/>
					</Form.Item>
				</Form>
			</Card>
			<Card className={classNames(style.qrcode__output, "qrcode")}>
				{value.length > 0 ? (
					<Space
						direction="vertical"
						align="center"
						size={"large"}
						id="myqrcode"
					>
						<QRCodeErrorBoundary>
							<QRCode
								value={value}
								color={color}
								bgColor={bgColor}
								bordered={bordered}
								size={size}
								iconSize={iconSize}
								icon={icon}
							/>
						</QRCodeErrorBoundary>
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
