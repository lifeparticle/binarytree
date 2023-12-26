import { Resource } from "components/InjectedComponent";
import { useFetch } from "hooks";
import { ListSearchResults } from "components/ComponentInjector";
import { FC } from "react";

export const URL = `./icon.json`;
export const QUERY_KEY = "icon";

const Icon: FC = () => {
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

export default Icon;
