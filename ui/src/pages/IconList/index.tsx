import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { useQuery } from "@tanstack/react-query";

import { getData } from "api/API";
import { ListItemProps } from "components/Hoc/List/types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { NewsType } from "components/General/ListItems/News/news.types";

const URL = `./icons.json`;
const QUERY_KEY = "icons";

function IconList() {
	const { data, isLoading, isError } = useQuery({
		queryKey: [QUERY_KEY],
		queryFn: () => {
			return getData(URL);
		},
	});
	return (
		<List
			items={data}
			resourceName="github"
			itemComponent={
				Resource as React.FC<ListItemProps<ResourceType | NewsType>>
			}
			isLoading={isLoading}
			isError={isError}
		/>
	);
}

export default IconList;
