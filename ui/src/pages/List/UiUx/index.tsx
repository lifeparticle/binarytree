import Resource from "components/General/ListItems/Resource/Resource";
import ListSearchResults from "components/RenderProps/ListSearchResults/ListSearchResults";
import useFetchList from "lib/utils/hooks/useFetchList";

const URL = `./ui_ux.json`;
const QUERY_KEY = "ui_ux";

const UiUx: React.FC = () => {
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

export default UiUx;
