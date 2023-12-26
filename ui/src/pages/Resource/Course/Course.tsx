import { Resource } from "components/InjectedComponent";
import { ListSearchResults } from "components/ComponentInjector";
import { useFetch } from "hooks";
import { FC } from "react";

const URL = `./course.json`;
const QUERY_KEY = "course";

const Course: FC = () => {
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

export default Course;
