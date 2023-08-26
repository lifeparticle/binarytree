import Resource from "components/General/ListItems/Resource/Resource";
import useFetchList from "lib/utils/hooks/useFetchList";
import ListSearchResults from "components/RenderProps/ListSearchResults";
<<<<<<< HEAD
import { QUERY_KEY, URL } from "./utils/contants";
=======
import { QUERY_KEY, URL } from "./utils/constants";
>>>>>>> upstream/main

const Icon: React.FC = () => {
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

export default Icon;
