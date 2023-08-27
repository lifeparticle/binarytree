import { useSearchParams } from "react-router-dom";
import style from "./ListSearchResults.module.scss";
import { ResourceType } from "components/General/ListItems/Resource/utils/types";
import { QUERY_KEY_NEWS } from "pages/News";
import Search from "components/General/Search";
import { getCategories } from "components/General/Search/CategoryTags/utils/helper";
import { ListSearchResultsProps } from "./utils/types";
import List from "components/RenderProps/List";
import { API_ERROR, API_NO_DATA } from "lib/utils/constants";
import Text from "components/General/Text/Text";
import { Typography } from "antd";
import { filteredNews, filteredResource } from "./utils/helper";

const { Title } = Typography;

const ListSearchResults = <T,>({
	items,
	resourceName,
	itemComponent,
	isLoading,
	isError,
	source = "",
}: ListSearchResultsProps<T>): JSX.Element => {
	const [searchParams] = useSearchParams();

	if (isError) {
		return <Text text={API_ERROR} />;
	}

	if (!isError && !isLoading && items?.length === 0) {
		return <Text text={API_NO_DATA} />;
	}

	const { q: searchQuery, cat: categoryQuery } = {
		q: searchParams.get("q") || "",
		cat: searchParams.get("cat") || "",
	};

	const filteredList =
		resourceName === QUERY_KEY_NEWS
			? filteredNews(searchQuery, items)
			: filteredResource(searchQuery, categoryQuery, items);

	const list = filteredList || [...Array(20).keys()];

	const categories = getCategories(items as ResourceType[], resourceName);

	return (
		<div className={style.container}>
			<Search
				categories={categories}
				resourceName={resourceName}
				isLoading={isLoading}
			/>
			<List
				items={list}
				itemComponent={itemComponent}
				isLoading={isLoading}
			/>
			<Title level={5} onClick={() => window.open(source, "_blank")}>
				{source && `Source: ${source}`}
			</Title>
		</div>
	);
};

export default ListSearchResults;
