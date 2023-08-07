import { Card, Skeleton } from "antd";

import style from "./article.module.scss";
import { ListItemProps } from "components/Hoc/List/types";
import { NewsType } from "./news.types";

const News: React.FC<ListItemProps<NewsType>> = ({
	resource,
	handleOnClick,
	isLoading,
}) => {
	const { title, content, url } = resource || {};

	return (
		<Card className={style.article} onClick={() => handleOnClick(url)}>
			<Skeleton loading={isLoading}>
				<h4>{title}</h4>
				{content}
			</Skeleton>
		</Card>
	);
};

export default News;
