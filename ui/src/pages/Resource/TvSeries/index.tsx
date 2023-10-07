import Resource from "components/General/ListItems/Resource/Resource";
import ListSearchResults from "components/RenderProps/ListSearchResults";
import useFetchList from "hooks/useFetchList";
import { QUERY_KEY, URL } from "./utils/contants";

const TvSeries: React.FC = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);

	return (
		<ListSearchResults
			items={data}
			resourceName={QUERY_KEY}
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
			source="https://github.com/k4m4/movies-for-hackers"
		/>
	);
};

export default TvSeries;
