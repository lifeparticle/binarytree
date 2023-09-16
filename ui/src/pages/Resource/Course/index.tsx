import Resource from "components/General/ListItems/Resource/Resource";
import ListSearchResults from "components/RenderProps/ListSearchResults";
import useFetchList from "lib/utils/hooks/useFetchList";
import { QUERY_KEY, URL } from "./utils/contants";

const Course: React.FC = () => {
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

export default Course;
