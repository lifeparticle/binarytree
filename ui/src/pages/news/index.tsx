import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";

import { getData } from "api/API";
import SearchBar from "./SearchBar";
import Articles from "./components/Articles";
import { Main } from "./types/news.types";

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;

const News = () => {
	const location = useLocation();

	const { data, isLoading, isError } = useQuery<Main>({
		queryKey: [location.search || "?q=javascript"],
		queryFn: () => getData(location.search || "?q=javascript"),
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
