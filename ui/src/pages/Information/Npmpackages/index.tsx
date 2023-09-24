import Text from "components/General/Text/Text";
import { API_ERROR, API_NO_DATA } from "lib/utils/constants";
import useFetchList from "lib/utils/hooks/useFetchList";
import PackageList from "./components/PackageList";
import { PACKAGE_QUERY_KEY, PACKAGE_QUERY_URL } from "./utils/types";

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

	return (
		<PackageList packages={data?.packages || []} isLoading={isLoading} />
	);
};

export default Npmpackages;
