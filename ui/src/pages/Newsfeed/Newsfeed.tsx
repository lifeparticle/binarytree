import { FC } from "react";
import { QUERY_KEY_NEWS, TAB_ITEMS } from "./constants";
import { Tabs } from "antd";
import { ListSearchResults } from "components/ComponentInjector";
import { News } from "components/InjectedComponent";
import style from "./Newsfeed.module.scss";
import useNewsFeed from "./useNewsFeed";

const Newsfeed: FC = () => {
	const { data, isLoading, isError, setTab } = useNewsFeed();

	return (
		<>
			<Tabs
				items={TAB_ITEMS}
				onChange={(value) => {
					setTab(value);
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
