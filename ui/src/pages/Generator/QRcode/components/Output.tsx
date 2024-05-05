import { FC, useRef } from "react";
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
	downloadQRCode,
}) => {
	const domEl = useRef<Array<HTMLDivElement>>([]);

	return (
		<Card className={classNames(styles.qrcode__output, "qrcode")}>
			<DropdownDownloadButton
				handleDownload={(ext) =>
					downloadQRCode(ext, domEl.current, value, multiLine)
				}
				multiple={multiLine}
			/>
			{value.length > 0 ? (
				<Space
					direction="vertical"
					align="center"
					size={"large"}
					id="myqrcode"
				>
					<QRCodeErrorBoundary>
						{multiLine ? (
							value.split("\n").map((line, index) => (
								<>
									<div
										ref={(ref) => {
											if (ref) {
												domEl.current.push(ref);
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
											value={line}
											color={color}
											bgColor={bgColor}
											bordered={bordered}
											size={size}
											iconSize={iconSize}
											icon={icon}
										/>
									</div>
									<Text text={line} level={5} />
								</>
							))
						) : (
							<QRCode
								value={value}
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
