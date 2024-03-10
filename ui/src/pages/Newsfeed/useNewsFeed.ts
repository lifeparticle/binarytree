import { useState } from "react";
import { BASE_URL, FIRST_TAB_VALUE } from "./constants";
import { useFetch } from "hooks";

const useNewsFeed = () => {
	const [url, setUrl] = useState(FIRST_TAB_VALUE);

	const { data, isLoading, isError } = useFetch(url, `${BASE_URL}${url}`);

	const items = data?.articles;

	return { data: items, isLoading, isError, setUrl };
};

export default useNewsFeed;
