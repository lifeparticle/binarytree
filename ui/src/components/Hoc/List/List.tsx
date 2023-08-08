import { useSearchParams } from "react-router-dom";
import style from "./list.module.scss";
import { ListProps } from "./types";
import { NewsType } from "components/General/ListItems/News/news.types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { QUERY_KEY_NEWS } from "pages/News";
import Search from "components/General/Search/Search";

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

const List = <T,>({
	items,
	resourceName,
	itemComponent: ItemComponent,
	isLoading,
	isError,
}: ListProps<T>): JSX.Element => {
	const [searchParams] = useSearchParams();

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

	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	const list = filteredList ? filteredList : [...Array(20).keys()];
	if (isError) {
		return <div>Something went wrong</div>;
	}

	return (
		<div className={style.container}>
			<Search
				items={items as (ResourceType | NewsType)[]}
				resourceName={resourceName}
			/>
			{list.map((item, i) => (
				<ItemComponent
					key={i}
					resource={item as T}
					handleOnClick={handleOnClick}
					isLoading={isLoading}
				/>
			))}
		</div>
	);
};

export default List;
