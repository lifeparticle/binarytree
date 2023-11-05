import { Avatar, Card, Skeleton, Space, Tag, Typography } from "antd";
import style from "./Resource.module.scss";
import { Clipboard } from "components/RenderProps";
import { ClipboardButton } from "components/General";
import { ListItemProps } from "components/RenderProps";

const { Title } = Typography;

export type SocialName = "github" | "youtube" | "website";

interface Social {
	name: SocialName;
	url: string;
}

export interface ResourceType {
	name: string;
	category: string;
	subCategory: string[];
	socials: Social[];
	url: string;
}

const Resource: React.FC<ListItemProps<ResourceType>> = ({
	resource,
	handleOnClick,
	isLoading,
}) => {
	const { name, category, url } = resource || {};

	return (
		<Card
			className={style.resource}
			key={name}
			onClick={() => handleOnClick(url)}
			hoverable
		>
			<Skeleton loading={isLoading} avatar active>
				<Space className={style.resource__container}>
					<Space size={16}>
						<Avatar className={style.resource__avatar}>
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
