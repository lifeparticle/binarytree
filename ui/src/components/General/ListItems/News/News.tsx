import { NewsType } from "./utils/types";
import { Card, Image, Skeleton, Typography } from "antd";
import { ListItemProps } from "components/RenderProps/List/utils/types";
const { Title } = Typography;

const News: React.FC<ListItemProps<NewsType>> = ({
	resource,
	handleOnClick,
	isLoading,
}) => {
	const { title, content, url, image } = resource || {};

	return (
		<Card onClick={() => handleOnClick(url)} hoverable>
			<Skeleton loading={isLoading}>
				<Image preview={false} src={image} alt="" />
				<Title level={4}>{title}</Title>
				{content}
			</Skeleton>
		</Card>
	);
};

export default News;
