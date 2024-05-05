import { FC } from "react";
import styles from "pages/Generator/QRcode/QRcode.module.scss";
import { classNames } from "utils/helper-functions/string";
import { Card, QRCode, Space } from "antd";
import QRCodeErrorBoundary from "./QRCodeErrorBoundary";
import { DropdownDownloadButton, Warning, Text } from "components/General";

interface OutputProps {
	value: string;
	color: string;
	bgColor: string;
	bordered: boolean;
	multiLine: boolean;
	size: number;
	iconSize: number;
	icon?: string;
	domEl: Array<HTMLDivElement>;
	downloadQRCode: (
		ext: string,
		domEl: Array<HTMLDivElement>,
		value: string,
		multiLine: boolean
	) => void;
}

const Output: FC<OutputProps> = ({
	value,
	color,
	bgColor,
	bordered,
	multiLine,
	size,
	iconSize,
	icon,
	domEl,
	downloadQRCode,
}) => {
	const trimmedValue = value.trim();
	const trimmedValues = multiLine
		? trimmedValue.split("\n").filter((line) => line !== "")
		: [];

	return (
		<Card className={classNames(styles.qrcode__output, "qrcode")}>
			{trimmedValue.length > 0 ? (
				<Space
					direction="vertical"
					align="center"
					size={"large"}
					id="myqrcode"
				>
					<DropdownDownloadButton
						handleDownload={(ext) =>
							downloadQRCode(ext, domEl, value, multiLine)
						}
						multiple={multiLine}
					/>
					<QRCodeErrorBoundary>
						{multiLine ? (
							<>
								<Text
									text={`Total QR Codes: ${trimmedValues.length}`}
									level={4}
								/>
								{trimmedValues.map((line, index) => (
									<>
										<div
											ref={(ref) => {
												if (ref) {
													domEl.push(ref);
												}
											}}
											style={{
												borderRadius: "8px",
												width: "fit-content",
												backgroundColor: "transparent",
											}}
											key={index}
										>
											<QRCode
												value={line.trim()}
												color={color}
												bgColor={bgColor}
												bordered={bordered}
												size={size}
												iconSize={iconSize}
												icon={icon}
											/>
										</div>
										<Text
											text={`${index + 1}. ${line}`}
											level={5}
										/>
									</>
								))}
							</>
						) : (
							<QRCode
								value={trimmedValue}
								color={color}
								bgColor={bgColor}
								bordered={bordered}
								size={size}
								iconSize={iconSize}
								icon={icon}
							/>
						)}
					</QRCodeErrorBoundary>
				</Space>
			) : (
				<Warning text="There is no data for generating QR code, please provide data first." />
			)}
		</Card>
	);
};

export default Output;
