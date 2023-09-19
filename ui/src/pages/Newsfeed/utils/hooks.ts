import { useState } from "react";
import { parseXML } from "./helper";
import { CORS_PROXY_URL, SITE_OPTIONS } from "./constants";
import useFetchList from "lib/utils/hooks/useFetchList";

const useNewsFeed = () => {
	const [url, setUrl] = useState(SITE_OPTIONS["frontend-focus"].value);
	const isFeedUrl = url.includes(".xml");

	const { data, isLoading, isError } = useFetchList(
		url,
		isFeedUrl && import.meta.env.DEV ? CORS_PROXY_URL + url : url
	);
	let items = undefined;
	if (data) {
		items = isFeedUrl ? parseXML(data) : data.articles;
	}
	return { data: items, isLoading, isError, setUrl };
};

export default useNewsFeed;
