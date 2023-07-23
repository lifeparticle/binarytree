import { Row, Typography } from "antd";
import ArticleCard from "./Article";
import style from "./articles.module.scss";
import { Article } from "pages/News/types.ts/types";

interface PropsType {
	articles: Article[];
}

const Articles: React.FC<PropsType> = ({ articles }) => {
	return (
		<div className={style.articles}>
			<Row gutter={[16, 16]}>
				{articles.map((article) => (
					<ArticleCard {...article} key={article.url} />
				))}
			</Row>

			<Typography.Title level={5}>
				News from{" "}
				<a href="https://newsapi.org/" target="_blank">
					newsapi
				</a>
			</Typography.Title>
		</div>
	);
};

export default Articles;
