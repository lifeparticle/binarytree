import { Card, Col } from "antd";
import { Article } from "../types/news.types";

const { Meta } = Card;

function ArticleCard({ author, title, urlToImage, content }: Article) {
	return (
		<Col span={6}>
			<Card cover={<img src={urlToImage} alt={title} />}>
				<Meta title={title} description={content} />
			</Card>
		</Col>
	);
}

export default ArticleCard;
