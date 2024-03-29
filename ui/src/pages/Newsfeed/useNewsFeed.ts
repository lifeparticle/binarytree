import { useState } from "react";
import { BASE_URL, FIRST_TAB_VALUE } from "./constants";
import { useFetch } from "hooks";

const useNewsFeed = () => {
	const [tab, setTab] = useState(FIRST_TAB_VALUE);

	const { data, isLoading, isError } = useFetch(tab, `${BASE_URL}${tab}`);

	const items = data?.articles;

	return { data: items, isLoading, isError, setTab };
};

export default useNewsFeed;
