import { Card } from "antd";

import style from "./article.module.scss";
import { ListItemProps } from "components/Hoc/List/types";
import { NewsType } from "./news.types";

const News: React.FC<ListItemProps<NewsType>> = ({
	resource,
	handleOnClick,
}) => {
	const { title, content, url } = resource;

	return (
		<Card className={style.article} onClick={() => handleOnClick(url)}>
			<h4>{title}</h4>
			{content}
		</Card>
	);
};

export default News;
