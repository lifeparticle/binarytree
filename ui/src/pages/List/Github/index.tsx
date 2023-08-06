import List from "components/Hoc/List/List";
import Resource from "components/General/ListItems/Resource/Resource";
import useFetchList from "lib/utils/hooks/useFetchList";

const URL = `./github.json`;
const QUERY_KEY = "github";

function GithubList() {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);

	return (
		<List
			items={data}
			resourceName={QUERY_KEY}
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
		/>
	);
}

export default GithubList;
