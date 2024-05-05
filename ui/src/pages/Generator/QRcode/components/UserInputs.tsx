import { FC } from "react";
import {
	Card,
	Form,
	Input,
	Badge,
	Checkbox,
	Upload,
	UploadProps,
	message,
} from "antd";
import { PageGrid } from "components/Layouts";
import {
	ColorPickerWithInput,
	ResponsiveInputWithLabel,
	ResponsiveButton,
} from "components/General";
import styles from "pages/Generator/QRcode/QRcode.module.scss";
import { handleImageUpload } from "utils/helper-functions/files";

const { TextArea } = Input;

interface UserInputsProps {
	value: string;
	setValue: (value: string) => void;
	dataType: string;
	color: string;
	setColor: (color: string) => void;
	bgColor: string;
	setBgColor: (bgColor: string) => void;
	size: number;
	setSize: (size: number) => void;
	setBordered: (bordered: boolean) => void;
	setMultiLine: (multiLine: boolean) => void;
	iconSize: number;
	setIconSize: (iconSize: number) => void;
	icon: string;
	setIcon: (icon: string) => void;
}
const UserInputs: FC<UserInputsProps> = ({
	value,
	setValue,
	dataType,
	color,
	setColor,
	bgColor,
	setBgColor,
	size,
	setSize,
	setBordered,
	setMultiLine,
	iconSize,
	setIconSize,
	setIcon,
	icon,
}) => {
	const props: UploadProps = {
		name: "file",
		multiple: false,
		customRequest: (options) => {
			if (options.onSuccess) {
				options.onSuccess({}, new XMLHttpRequest());
			}
		},
		onChange(info) {
			const { status, originFileObj } = info.file;
			if (status === "done") {
				handleImageUpload(
					originFileObj as File,
					(base64String: string) => {
						setIcon(base64String);
					}
				);
				message.success(
					`${info.file.name} file uploaded successfully.`
				);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		accept: "image/*",
		listType: "picture",
	};

	return (
		<Card>
			<Form layout="vertical">
				<Form.Item
					label={
						<div className={styles.qrcode__label}>
							<p>{`Input data`}</p>
							<Badge
								text={`${dataType} detected`}
								color={
									dataType === "No data" ? "yellow" : "green"
								}
							/>
						</div>
					}
				>
					<TextArea
						value={value}
						rows={7}
						onChange={(e) => setValue(e.target.value.trim())}
						data-gramm={false}
						placeholder="Enter input"
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

					<Form.Item label="Add border to QR code">
						<Checkbox
							type="checkbox"
							onChange={(e) => setBordered(e.target.checked)}
						>
							Border
						</Checkbox>
					</Form.Item>
					<Form.Item label="Generate multiple QR codes">
						<Checkbox
							type="checkbox"
							onChange={(e) => setMultiLine(e.target.checked)}
						>
							Multi Line
						</Checkbox>
					</Form.Item>
				</PageGrid>

				{value && (
					<PageGrid>
						<Form.Item>
							<Upload {...props}>
								<ResponsiveButton>Upload Iocn</ResponsiveButton>
							</Upload>
						</Form.Item>
						{icon && (
							<Form.Item>
								<ResponsiveInputWithLabel
									label="Icon Size"
									placeholder="Height"
									value={iconSize}
									onChange={(val) => val && setIconSize(val)}
									min={0}
									type="number"
								/>
							</Form.Item>
						)}
					</PageGrid>
				)}
			</Form>
		</Card>
	);
};

export default UserInputs;
