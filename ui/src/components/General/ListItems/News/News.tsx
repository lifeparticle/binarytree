import { NewsType } from "./news.types";
import { Card, Skeleton, Typography } from "antd";
import { ListItemProps } from "components/Hoc/List/types";
const { Title } = Typography;

const News: React.FC<ListItemProps<NewsType>> = ({
	resource,
	handleOnClick,
	isLoading,
}) => {
	const { title, content, url } = resource || {};

	return (
		<Card onClick={() => handleOnClick(url)} hoverable>
			<Skeleton loading={isLoading}>
				<Title level={4}>{title}</Title>
				{content}
			</Skeleton>
		</Card>
	);
};

export default News;
