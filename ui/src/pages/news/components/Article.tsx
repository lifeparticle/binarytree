import { Card, Col } from "antd";
import { Article } from "../types/news.types";
import style from "./article.module.scss";

const { Meta } = Card;

function ArticleCard({ title, urlToImage, content }: Article) {
	return (
		<Col span={6}>
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
}

export default ArticleCard;
