import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { getData } from "api/API";
import { APIResponse } from "./types";
import List from "components/Hoc/List/List";
import News from "components/General/ListItems/News/News";

const URL = `./news.json`;
const queryKey = "news";

const NewsPage = () => {
	const { data, isLoading, isError } = useQuery<APIResponse>({
		queryKey: [queryKey],
		queryFn: () => {
			return getData(URL);
		},
	});

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
				<List
					items={data.articles}
					resourceName="news"
					itemComponent={News}
				/>
			)}
		</div>
	);
};

export default NewsPage;
