import { Avatar, Card, Skeleton, Space, Tag, Typography,Col } from "antd";
import style from "./Resource.module.scss";
import { ListItemProps } from "components/ComponentInjector";

const { Title } = Typography;

type SocialName = "github" | "youtube" | "website";

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
		<Col className="gutter-row" xs={24} md={12} xl={8}>
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

					{/* <Clipboard
						text={url}
						clipboardComponent={ClipboardButton}
					/> */}
				</Space>
			</Skeleton>
		</Card>
		</Col>
	);
};

export default Resource;
