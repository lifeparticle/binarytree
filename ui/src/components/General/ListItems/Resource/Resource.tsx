import { Card, Skeleton, Space, Tag, Typography } from "antd";
import style from "./resource.module.scss";
import { ListItemProps } from "components/Hoc/List/types";
import { ResourceType } from "./resource.type";
import Clipboard from "components/Hoc/Clipboard/Clipboard";
import ClipboardButton from "components/General/ClipboardButton/ClipboardButton";
const { Title } = Typography;

const Resource: React.FC<ListItemProps<ResourceType>> = ({
	resource,
	handleOnClick,
}) => {
	const { name, category, socials, url } = resource;

	return (
		<Card
			className={style.card}
			key={name}
			hoverable
			onClick={() => handleOnClick(url)}
		>
			<Skeleton loading={false} avatar active>
				<Space
					size="large"
					direction="horizontal"
					wrap
					className={style.card_space}
				>
					<Title level={2}>{name}</Title>
					<Tag color="green" key={category}>
						{category}
					</Tag>
					{socials.map((social) => social.name)}
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
