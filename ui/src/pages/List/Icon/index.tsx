import Resource from "components/General/ListItems/Resource/Resource";
import useFetchList from "lib/utils/hooks/useFetchList";
import ListSearchResults from "components/RenderProps/ListSearchResults";
import { QUERY_KEY, URL } from "./utils/contant";

const Icon: React.FC = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);
	return (
		<ListSearchResults
			items={data}
			resourceName="github"
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default Icon;
