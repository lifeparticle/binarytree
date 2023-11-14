import { useState } from "react";
import { parseXML } from "./utils/helper";
import { BASE_URL, SITE_OPTIONS } from "./constants";
import useFetchList from "hooks/useFetchList";

const useNewsFeed = () => {
	const [url, setUrl] = useState(SITE_OPTIONS["frontend-focus"].value);
	const isFeedItem = Object.values(SITE_OPTIONS).find(
		(item) => item.isFeedItem && item.value === url
	);

	const { data, isLoading, isError } = useFetchList(
		url,
		isFeedItem ? `${BASE_URL}${url}` : url
	);
	let items = undefined;
	if (data) {
		items = isFeedItem ? parseXML(data) : data.articles;
	}
	return { data: items, isLoading, isError, setUrl };
};

export default useNewsFeed;
