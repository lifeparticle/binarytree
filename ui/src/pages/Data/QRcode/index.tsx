import { Card, Form, QRCode, Input, Badge, Space } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import React, { useEffect, useState } from "react";
import { detectQrData, downloadQRCode } from "./utils/helper";
import style from "./QRcode.module.scss";
import DropdownDownloadButton from "components/General/DropdownDownloadButton";
import Warning from "components/General/Warning";

const { TextArea } = Input;

const QRcode: React.FC = () => {
	const [value, setValue] = useState("");
	const [dataType, setDataType] = useState("");

	useEffect(() => {
		setDataType(detectQrData(value));
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
							allowClear
						/>
					</Form.Item>
				</Form>
			</Card>
			<Card className={style.qrcode__output}>
				{value.length > 0 ? (
					<Space direction="vertical" align="center" size={"large"}>
						<QRCode value={value} />
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
