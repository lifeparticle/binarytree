import Text from "components/General/Text/Text";
import { API_ERROR, API_NO_DATA } from "data/constants";
import useFetchList from "hooks/useFetchList";
import PackageList from "./components/PackageList";
import { PACKAGE_QUERY_KEY, PACKAGE_QUERY_URL } from "./utils/constants";

const Npmpackages = () => {
	const { data, isLoading, isError } = useFetchList(
		PACKAGE_QUERY_KEY,
		PACKAGE_QUERY_URL
	);

	if (isError) {
		return <Text text={API_ERROR} />;
	}

	if (!isError && !isLoading && data.packages?.length === 0) {
		return <Text text={API_NO_DATA} />;
	}

	return <PackageList packages={data?.packages} isLoading={isLoading} />;
};

export default Npmpackages;
