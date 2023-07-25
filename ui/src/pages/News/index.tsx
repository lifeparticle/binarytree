import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useLocation } from "react-router-dom";
import { getData } from "api/API";
import Articles from "./components/Articles";
import { APIResponse } from "./types.ts/types";

const URL = `./news.json`;

const News = () => {
	const location = useLocation();

	const endpoint =
		location.search?.length > 3 ? location.search : "?q=javascript";

	const { data, isLoading, isError } = useQuery<APIResponse>({
		queryKey: [endpoint],
		queryFn: () => {
			return getData(URL);
		},
	});

	console.log(data);

	return (
		<div>
			{isLoading ? (
				<Spin
					indicator={
						<LoadingOutlined style={{ fontSize: 34 }} spin />
					}
				/>
			) : isError ? (
				<div>Something wrong</div>
			) : (
				<Articles articles={data.articles} />
			)}
		</div>
	);
};

export default News;
