import { Button, Card, Form, QRCode, Input, Badge } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import React, { useEffect, useState } from "react";
import { detectQrData, downloadQRCode } from "./utils/helper";
import Icon from "components/General/Icon";
import style from "./QRcode.module.scss";

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
					<div id="myqrcode" className={style.qrcode__output__result}>
						<QRCode
							value={value}
							bgColor="#fff"
							style={{ marginBottom: 16 }}
						/>
						<Button onClick={downloadQRCode}>Download</Button>
					</div>
				) : (
					<div className={style.qrcode__output__notfound}>
						<span>
							<Icon name="AlertTriangle" size={30} />
						</span>

						<p>
							There is no data for generating QR code, please
							provide data first.
						</p>
					</div>
				)}
			</Card>
		</PageGrid>
	);
};

export default QRcode;
