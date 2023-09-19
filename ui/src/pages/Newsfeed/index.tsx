import React, { useState } from "react";
import {
	QUERY_KEY_NEWS,
	SITE_OPTIONS,
	TAB_ITEMS,
	CORS_PROXY_URL,
} from "./utils/constants";
import useFetchList from "lib/utils/hooks/useFetchList";
import { Tabs } from "antd";
import ListSearchResults from "components/RenderProps/ListSearchResults";
import News from "components/General/ListItems/News/News";
import { parseXML } from "./utils/helper";

const Newsfeed: React.FC = () => {
	const [url, setUrl] = useState(SITE_OPTIONS["frontend-focus"].value);
	const isFeedUrl =
		url === SITE_OPTIONS["frontend-focus"].value ||
		url === SITE_OPTIONS["status-code"].value;
	const { data, isLoading, isError } = useFetchList(
		url,
		isFeedUrl ? CORS_PROXY_URL + url : url
	);

	return (
		<>
			<Tabs
				defaultActiveKey={SITE_OPTIONS["frontend-focus"].value}
				items={TAB_ITEMS}
				onChange={(value) => {
					setUrl(value);
				}}
			/>

			<ListSearchResults
				isError={isError}
				isLoading={isLoading}
				itemComponent={News}
				resourceName={QUERY_KEY_NEWS}
				items={isFeedUrl ? parseXML(data) : data?.articles}
			/>
		</>
	);
};

export default Newsfeed;
