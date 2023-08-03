import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { useQuery } from "@tanstack/react-query";
import { getData } from "api/API";
import { ListItemProps } from "components/Hoc/List/types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { NewsType } from "components/General/ListItems/News/news.types";

const URL = `./github.json`;
const QUERY_KEY = "github";

function GithubList() {
	const { data, isLoading, isError } = useQuery({
		queryKey: [QUERY_KEY],
		queryFn: () => {
			return getData(URL);
		},
	});

	return (
		<List
			items={data}
			resourceName={QUERY_KEY}
			itemComponent={
				Resource as React.FC<ListItemProps<ResourceType | NewsType>>
			}
			isLoading={isLoading}
			isError={isError}
		/>
	);
}

export default GithubList;
