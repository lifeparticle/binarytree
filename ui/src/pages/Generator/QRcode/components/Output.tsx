import React from "react";
import styles from "pages/Generator/QRcode/QRcode.module.scss";
import { classNames } from "utils/helper-functions/string";
import { Card, QRCode, Space } from "antd";
import QRCodeErrorBoundary from "./QRCodeErrorBoundary";
import { DropdownDownloadButton, Warning } from "components/General";

interface OutputProps {
	value: string;
	color: string;
	bgColor: string;
	bordered: boolean;
	size: number;
	iconSize: number;
	icon?: string;
	downloadQRCode: (ext: string) => void;
}

const Output: React.FC<OutputProps> = ({
	value,
	color,
	bgColor,
	bordered,
	size,
	iconSize,
	icon,
	downloadQRCode,
}) => {
	return (
		<Card className={classNames(styles.qrcode__output, "qrcode")}>
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
					<DropdownDownloadButton handleDownload={downloadQRCode} />
				</Space>
			) : (
				<Warning
					text="There is no data for generating QR code, please provide data
					first."
				/>
			)}
		</Card>
	);
};

export default Output;
