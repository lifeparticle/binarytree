import { Card, Col } from "antd";
import { Article } from "../types/news.types";
import style from "./article.module.scss";

const { Meta } = Card;

const ArticleCard: React.FC<Article> = ({ title, urlToImage, content }) => {
	return (
		<Col xs={24} sm={24} md={12} lg={6} xl={6}>
			<Card
				className={style.card}
				cover={
					<img
						src={urlToImage}
						alt={title}
						className={style.cardImage}
					/>
				}
			>
				<Meta title={title} description={content.slice(0, 120)} />
			</Card>
		</Col>
	);
};

export default ArticleCard;
