import { Card } from "antd";

import style from "./article.module.scss";

interface NewsProps {
	resource: {
		title: string;
		content: string;

		url: string;
	};
	handleOnClick: (url: string) => void;
}

const News: React.FC<NewsProps> = ({ resource, handleOnClick }) => {
	const { title, content, url } = resource;

	return (
		<Card className={style.article} onClick={() => handleOnClick(url)}>
			<h4>{title}</h4>
			{content}
		</Card>
	);
};

export default News;
