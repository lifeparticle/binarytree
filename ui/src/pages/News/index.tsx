import { useQuery } from "@tanstack/react-query";
import { getData } from "api/API";
import { APIResponse } from "./types";
import List from "components/Hoc/List/List";
import News from "components/General/ListItems/News/News";
import { NewsType } from "components/General/ListItems/News/news.types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { ListItemProps } from "components/Hoc/List/types";

const URL = `./news.json`;
const QUERY_KEY = "news";

const NewsPage = () => {
	const { data, isLoading, isError } = useQuery<APIResponse>({
		queryKey: [QUERY_KEY],
		queryFn: () => {
			return getData(URL);
		},
	});

	return (
		<List
			items={data?.articles || []}
			resourceName="news"
			itemComponent={
				News as React.FC<ListItemProps<ResourceType | NewsType>>
			}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default NewsPage;
