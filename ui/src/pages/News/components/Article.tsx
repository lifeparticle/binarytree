import { Card } from "antd";
import style from "./article.module.scss";
import { Article as IArticle } from "pages/News/types.ts/types";

const Article: React.FC<IArticle> = ({ title, urlToImage, content, url }) => {
	console.log(urlToImage);
	return (
		<div className={style.article}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<Card>
					<h4>{title}</h4>
					{content.slice(0, 120)}
				</Card>
			</a>
		</div>
	);
};
export default Article;
