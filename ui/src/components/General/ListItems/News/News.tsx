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
		<div className={style.article}>
			<a onClick={() => handleOnClick(url)}>
				<Card>
					<h4>{title}</h4>
					{content}
				</Card>
			</a>
		</div>
	);
};

export default News;
