import { Avatar, Card, Skeleton, Space, Tag, Typography } from "antd";
import style from "./resource.module.scss";
import { ResourceType } from "./resource.type";
import { ListItemProps } from "components/Hoc/List/types";
import Clipboard from "components/Hoc/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";

const { Title } = Typography;

const Resource: React.FC<ListItemProps<ResourceType>> = ({
	resource,
	isLoading,
}) => {
	const { name, category, url } = resource || {};

	return (
		<Card className={style.card} key={name} hoverable>
			<Skeleton loading={isLoading} avatar active>
				<Space className={style.card__container}>
					<Space size={16}>
						<Avatar className={style.card__avatar}>
							{name?.[0]}
						</Avatar>
						<Space direction="vertical">
							<Title level={4}>{name}</Title>
							<Tag key={category}>{category}</Tag>
						</Space>
					</Space>

					<Clipboard
						text={url}
						clipboardComponent={ClipboardButton}
					/>
				</Space>
			</Skeleton>
		</Card>
	);
};

export default Resource;
