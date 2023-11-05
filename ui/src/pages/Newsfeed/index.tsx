import React from "react";
import { QUERY_KEY_NEWS, TAB_ITEMS } from "./utils/constants";
import { Tabs } from "antd";
import { ListSearchResults } from "components/RenderProps";
import { News } from "components/General";
import style from "./Newsfeed.module.scss";
import useNewsFeed from "./useNewsFeed";

const Newsfeed: React.FC = () => {
	const { data, isLoading, isError, setUrl } = useNewsFeed();

	return (
		<>
			<Tabs
				items={TAB_ITEMS}
				onChange={(value) => {
					setUrl(value);
				}}
				className={style.newsfeed_tabs}
			/>

			<ListSearchResults
				isError={isError}
				isLoading={isLoading}
				itemComponent={News}
				resourceName={QUERY_KEY_NEWS}
				items={data}
			/>
		</>
	);
};

export default Newsfeed;
