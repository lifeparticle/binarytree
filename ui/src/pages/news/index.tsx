import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";

import { getData } from "api/API";
import SearchBar from "./SearchBar";
import Articles from "./components/Articles";
import { Main } from "./types/news.types";

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
const API_BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const News = () => {
	const location = useLocation();

	const endpoint =
		location.search?.length > 3 ? location.search : "?q=javascript";

	const { data, isLoading, isError } = useQuery<Main>({
		queryKey: [endpoint],
		queryFn: () => {
			const url = `${API_BASE_URL}/${endpoint}&apiKey=${API_KEY}`;
			return getData(url);
		},
	});

	return (
		<div>
			<SearchBar />

			{isLoading ? (
				<Spin indicator={antIcon} />
			) : isError ? (
				<div>Something wrong</div>
			) : (
				<Articles articles={data.articles} />
			)}
		</div>
	);
};

export default News;
