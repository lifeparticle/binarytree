import { Resource } from "components/General";
import { ListSearchResults } from "components/RenderProps";
import useFetchList from "hooks/useFetchList";
import { QUERY_KEY, URL } from "./utils/contants";

const Plugin: React.FC = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);

	return (
		<ListSearchResults
			items={data}
			resourceName={QUERY_KEY}
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default Plugin;
