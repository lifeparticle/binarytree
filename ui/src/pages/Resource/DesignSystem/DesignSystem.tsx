import { Resource } from "components/InjectedComponent";
import { ListSearchResults } from "components/ComponentInjector";
import { useFetch } from "hooks";
import { FC } from "react";

const URL = `./design_system.json`;
const QUERY_KEY = "design_system";

const DesignSystem: FC = () => {
	const { data, isLoading, isError } = useFetch(QUERY_KEY, URL);

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

export default DesignSystem;
