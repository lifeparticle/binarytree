import { FC, useState } from "react";
import style from "./Uuid.module.scss";
import { Card, Typography } from "antd";
import { Clipboard } from "components/ComponentInjector";
import { ClipboardButton } from "components/InjectedComponent";
import { Icon, ResponsiveButton } from "components/General";

const { Title } = Typography;

const Uuid: FC = () => {
	const [uuid, setUuid] = useState(crypto.randomUUID());
	return (
		<div className={style.uuid}>
			<Card bordered={false} title="UUID">
				<div className={style.uuid__output}>
					<Title>{uuid}</Title>
					<Clipboard
						text={uuid}
						clipboardComponent={ClipboardButton}
					/>
					<ResponsiveButton
						icon={<Icon name="RefreshCcw" />}
						onClick={() => setUuid(crypto.randomUUID())}
					/>
				</div>
			</Card>
		</div>
	);
};

export default Uuid;
