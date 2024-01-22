import { Text } from "components/General";
import { API_ERROR, API_NO_DATA } from "data/constants";
import { useFetch } from "hooks";
import PackageList from "./components/PackageList";

const PACKAGE_QUERY_KEY = "npm-packages";
const PACKAGE_QUERY_URL =
	"https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/npm-packages/packages.json";

const Npmpackages = () => {
	const { data, isLoading, isError } = useFetch(
		PACKAGE_QUERY_KEY,
		PACKAGE_QUERY_URL
	);

	if (isError) {
		return <Text text={API_ERROR} />;
	}

	if (!isError && !isLoading && (!data.packages || data.packages.length === 0)) {
		return <Text text={API_NO_DATA} />;
	}

	return <PackageList packages={data?.packages} isLoading={isLoading} />;
};

export default Npmpackages;
