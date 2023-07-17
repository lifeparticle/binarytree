import { Row } from "antd";
import { Article } from "../types/news.types";
import ArticleCard from "./Article";

interface PropsType {
	articles: Article[];
}

const Articles = ({ articles }: PropsType) => {
	return (
		<div>
			<Row gutter={[16, 16]}>
				{articles.map((article) => (
					<ArticleCard {...article} key={article.url} />
				))}
			</Row>
		</div>
	);
};

export default Articles;
