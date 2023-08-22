import News from "components/General/ListItems/News/News";
import useFetchList from "lib/utils/hooks/useFetchList";
import ListSearchResults from "components/RenderProps/ListSearchResults";

const URL = `https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/news.json`;
export const QUERY_KEY_NEWS = "news";

const NewsPage = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY_NEWS, URL);

	return (
		<ListSearchResults
			items={data?.articles}
			resourceName={QUERY_KEY_NEWS}
			itemComponent={News}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default NewsPage;
