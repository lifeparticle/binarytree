import Resource from "components/General/ListItems/Resource/Resource";
import ListSearchResults from "components/RenderProps/ListSearchResults/ListSearchResults";
import useFetchList from "lib/utils/hooks/useFetchList";

const URL = `./book.json`;
const QUERY_KEY = "book";

const Book: React.FC = () => {
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

export default Book;
