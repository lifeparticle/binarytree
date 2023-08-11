import { useSearchParams } from "react-router-dom";
import style from "./ListSearchResults.module.scss";
import { NewsType } from "components/General/ListItems/News/news.types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { QUERY_KEY_NEWS } from "pages/News";
import Search from "components/General/Search/Search";
import { getCategories } from "components/General/Search/CategoryTags/helper";
import { ListSearchResultsProps } from "./types";
import List from "components/RenderProps/List/List";
import { API_ERROR, API_NO_DATA } from "lib/utils/constant";
import Text from "components/General/Text/Text";
import { Typography } from "antd";

const { Title } = Typography;

const filteredNews = (searchQuery: string, items: NewsType[]) => {
	if (searchQuery) {
		return items?.filter((item) =>
			item.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}
	return items;
};

const filteredResource = (
	searchQuery: string,
	categoryQuery: string,
	items: ResourceType[]
) => {
	const lowercaseSearchQuery = searchQuery.toLowerCase();
	const lowercaseCategoryQuery = categoryQuery.toLowerCase();

	return items?.filter((item) => {
		const name = item?.name?.toLowerCase();
		const category = item?.category?.toLowerCase();

		if (searchQuery || categoryQuery !== "All") {
			return (
				(searchQuery ? name?.includes(lowercaseSearchQuery) : true) &&
				(categoryQuery !== "All"
					? category?.includes(lowercaseCategoryQuery)
					: true)
			);
		}

		return true;
	});
};

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
			? filteredNews(searchQuery, items as NewsType[])
			: filteredResource(
					searchQuery,
					categoryQuery,
					items as ResourceType[]
			  );

	const list = filteredList ? filteredList : [...Array(20).keys()];

	const categories = getCategories(items as ResourceType[], resourceName);

	return (
		<div className={style.container}>
			<Search
				categories={categories}
				resourceName={resourceName}
				isLoading={isLoading}
			/>
			<List
				items={list as T[]}
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
