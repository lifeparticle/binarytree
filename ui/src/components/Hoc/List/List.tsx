import { ChangeEvent, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "antd";
import style from "./list.module.scss";
import { ListProps } from "./types";
import { NewsType } from "components/General/ListItems/News/news.types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { getCategories } from "./helper";
import { QUERY_KEY_NEWS } from "pages/News";
import CategoryTags from "./CategoryTags/CategoryTags";

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
	const [searchParams, setSearchParams] = useSearchParams();
	const [queryParams, setQueryParams] = useState({
		q: searchParams.get("q") || "",
		cat: searchParams.get("cat") || "",
	});

	const { q: searchQuery, cat: categoryQuery } = queryParams;

	useEffect(() => {
		if (resourceName === QUERY_KEY_NEWS) {
			setSearchParams(`?q=${searchQuery}`);
		} else {
			setSearchParams(`?q=${searchQuery}&cat=${categoryQuery}`);
		}
	}, [searchQuery, categoryQuery, setSearchParams, resourceName]);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQueryParams((prevParams) => ({ ...prevParams, q: value }));
	};

	const handleCategoryChange = (value: string) => {
		setQueryParams((prevParams) => ({ ...prevParams, cat: value }));
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

	const categories = getCategories(items as ResourceType[], resourceName);

	const list = filteredList ? filteredList : [...Array(20).keys()];
	if (isError) {
		return <div>Something went wrong</div>;
	}

	return (
		<div className={style.container}>
			<Input
				type="text"
				placeholder="Search by title..."
				value={searchQuery}
				onChange={handleSearchChange}
			/>

			<CategoryTags
				categories={categories}
				category={categoryQuery}
				handleCategoryChange={handleCategoryChange}
				className={style.container__tag}
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
