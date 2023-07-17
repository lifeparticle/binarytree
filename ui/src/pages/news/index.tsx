import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";
import { getAllNews } from "services/news.services";
import SearchBar from "./SearchBar";
import Articles from "./components/Articles";
import { Main } from "./types/news.types";

const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;

const NewsDashboard = () => {
	const location = useLocation();

	const { data, isLoading, isError } = useQuery<Main>({
		queryKey: [location.search || "?q=apple"],
		queryFn: () => getAllNews(location.search || "apple"),
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

export default NewsDashboard;
