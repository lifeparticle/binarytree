import List from "components/Hoc/List/List";
import News from "components/General/ListItems/News/News";
import useFetchList from "lib/utils/hooks/useFetchList";
import Search from "components/General/Search/Search";

const URL = `./news.json`;
export const QUERY_KEY_NEWS = "news";

const NewsPage = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY_NEWS, URL);

	return (
		<List
			items={data?.articles || []}
			resourceName={QUERY_KEY_NEWS}
			itemComponent={News}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default NewsPage;
