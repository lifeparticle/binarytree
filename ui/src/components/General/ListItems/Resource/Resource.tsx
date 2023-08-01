import { Avatar, Card, Skeleton, Space, Tag } from "antd";
import style from "./resource.module.scss";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

interface ResourceProps {
	resource: {
		name: string;
		category: string;
		subCategory: string[];
		url: string;
	};
	handleOnClick: (url: string) => void;
}

const Resource: React.FC<ResourceProps> = ({ resource, handleOnClick }) => {
	const { name, category, subCategory, url } = resource;

	return (
		<Card
			className={style.card}
			actions={[
				<SettingOutlined key="setting" />,
				<EditOutlined key="edit" />,
				<EllipsisOutlined key="ellipsis" />,
			]}
			key={name}
			hoverable
			onClick={() => handleOnClick(url)}
		>
			<Skeleton loading={false} avatar active>
				<Meta
					avatar={
						<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
					}
					title={name}
					description={category}
				/>
				<Space size="large" direction="horizontal" wrap>
					{subCategory.map((category) => (
						<Tag color="green" key={category}>
							{category}
						</Tag>
					))}
				</Space>
			</Skeleton>
		</Card>
	);
};

export default Resource;
