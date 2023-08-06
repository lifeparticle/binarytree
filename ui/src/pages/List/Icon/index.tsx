import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import useFetchList from "lib/utils/hooks/useFetchList";

export const URL = `./icons.json`;
export const QUERY_KEY = "icons";

function IconList() {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);
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
