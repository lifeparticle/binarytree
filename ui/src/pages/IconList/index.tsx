import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import { useQuery } from "@tanstack/react-query";

import { getData } from "api/API";

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
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
		/>
	);
}

export default IconList;
