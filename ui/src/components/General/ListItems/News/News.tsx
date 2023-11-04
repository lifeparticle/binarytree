import { Card, Image, Skeleton, Space, Typography } from "antd";
import { ListItemProps } from "components/RenderProps/List";
const { Title } = Typography;

export interface NewsType {
	title: string;
	content: string;
	url: string;
	image?: string;
}

const News: React.FC<ListItemProps<NewsType>> = ({
	resource,
	handleOnClick,
	isLoading,
}) => {
	const { title, content, url, image } = resource || {};

	return (
		<Card onClick={() => handleOnClick(url)} hoverable>
			<Skeleton loading={isLoading}>
				<Space size={"middle"} align="start">
					{image && (
						<Image
							width="10vw"
							preview={false}
							src={image}
							alt=""
						/>
					)}
					<div>
						<Title level={4}>{title}</Title>
						{content}
					</div>
				</Space>
			</Skeleton>
		</Card>
	);
};

export default News;
