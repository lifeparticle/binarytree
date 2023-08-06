import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "antd";
import style from "./list.module.scss";
import { ListProps } from "./types";
import SkeletonCard from "components/General/ListItems/SkeletonCard";
import { NewsType } from "components/General/ListItems/News/news.types";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { getCategories } from "./helper";
import { QUERY_KEY_NEWS } from "pages/News";
import CategoryTags from "./CategoryTags";

const filteredNews = <T extends NewsType>(searchQuery: string, items: T[]) => {
	if (searchQuery) {
		return items.filter((item) =>
			item.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}
	return items;
};

const filteredResource = <T extends ResourceType>(
	type: string,
	value: string,
	items: T[]
) => {
	if (type === "text") {
		return items.filter((item) =>
			item?.name.toLowerCase().includes(value.toLowerCase())
		);
	} else if (type === "cat") {
		return items.filter((item) =>
			item?.category.toLowerCase().includes(value.toLowerCase())
		);
	} else {
		return items;
	}
};

const List = <T,>({
	items,
	resourceName,
	itemComponent: ItemComponent,
	isLoading,
	isError,
}: ListProps<T>): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q") || "";
	const category = searchParams.get("cat") || "";
	const [searchQuery, setSearchQuery] = useState(query);
	const [categoryQuery, setCategoryQuery] = useState(category);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);
		setSearchParams(`?q=${value}`);
	};

	const handleCategoryChange = (value: string) => {
		setCategoryQuery(value);
		setSearchParams(`?cat=${value}`);
	};

	const filteredList =
		resourceName === QUERY_KEY_NEWS
			? filteredNews(searchQuery, items as NewsType[])
			: filteredResource(
					searchQuery ? "text" : categoryQuery ? "cat" : "",
					searchQuery || categoryQuery,
					items as ResourceType[]
			  );

	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	const categories = getCategories(items as ResourceType[], resourceName);

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
				category={category}
				handleCategoryChange={handleCategoryChange}
				className={style.container__tag}
			/>

			{isLoading ? (
				<SkeletonCard />
			) : isError ? (
				<div>Something went wrong</div>
			) : (
				filteredList.map((item, i) => (
					<ItemComponent
						key={i}
						resource={item as T}
						handleOnClick={handleOnClick}
					/>
				))
			)}
		</div>
	);
};

export default List;
