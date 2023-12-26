import { Resource } from "components/InjectedComponent";
import { ListSearchResults } from "components/ComponentInjector";
import { useFetch } from "hooks";
import { FC } from "react";

const URL = `./tv_series.json`;
const QUERY_KEY = "tv_series";

const TvSeries: FC = () => {
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

export default TvSeries;
