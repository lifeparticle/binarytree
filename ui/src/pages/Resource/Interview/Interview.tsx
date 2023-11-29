import { Resource } from "components/InjectedComponent";
import { ListSearchResults } from "components/ComponentInjector";
import useFetchList from "hooks/useFetchList";
import { QUERY_KEY, URL } from "./utils/contants";

const Interview: React.FC = () => {
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

export default Interview;
