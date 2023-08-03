import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { useQuery } from "@tanstack/react-query";
import { getData } from "api/API";
import { NewsType } from "components/General/ListItems/News/news.types";
import { ListItemProps } from "components/Hoc/List/types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";

const URL = `./youtube.json`;
const QUERY_KEY = "youtube";

function YoutubeList() {
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

export default YoutubeList;
