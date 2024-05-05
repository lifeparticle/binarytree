import { FC, useEffect, useState } from "react";
import style from "./Uuid.module.scss";
import { Card, Typography, InputNumber, List } from "antd";
import { Clipboard } from "components/ComponentInjector";
import { ClipboardButton } from "components/InjectedComponent";
import { Icon, ResponsiveButton } from "components/General";

const { Title } = Typography;

const Uuid: FC = () => {
	const [uuids, setUuids] = useState([crypto.randomUUID()]);
	const [numUuids, setNumUuids] = useState(1);

	const generateUuids = (count: number) => {
		const newUuids = Array.from({ length: count }, () =>
			crypto.randomUUID()
		);
		setUuids(newUuids);
	};

	useEffect(() => {
		generateUuids(numUuids);
	}, [numUuids]);

	return (
		<div className={style.uuid}>
			<Card
				style={{ width: "100%" }}
				bordered={false}
				title="UUID Generator"
				extra={
					<div className={style.uuid__extra}>
						<InputNumber
							min={1}
							max={100}
							defaultValue={1}
							onChange={(value) => value && setNumUuids(value)}
						/>
						<ResponsiveButton
							icon={<Icon name="RefreshCcw" />}
							onClick={() => generateUuids(numUuids)}
						/>
						<Clipboard
							text={Object.values(uuids).join("\n")}
							label="Copy All"
							clipboardComponent={ClipboardButton}
						/>
					</div>
				}
			>
				<List
					dataSource={uuids}
					renderItem={(uuid) => (
						<List.Item>
							<Title level={5}>{uuid}</Title>
							<Clipboard
								text={uuid}
								clipboardComponent={ClipboardButton}
							/>
						</List.Item>
					)}
				/>
			</Card>
		</div>
	);
};

export default Uuid;
