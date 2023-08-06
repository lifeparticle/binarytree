import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input, Tag } from "antd";
import style from "./list.module.scss";
import { ListProps } from "./types";
import SkeletonCard from "components/General/ListItems/SkeletonCard";

const filteredNews = <T,>(searchQuery: string, items: T[]) => {
	if (searchQuery) {
		return items.filter((item) =>
			item.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}
	return items;
};

const filteredResource = <T,>(type: string, value: string, items: T[]) => {
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
		resourceName === "news"
			? filteredNews(searchQuery, items)
			: filteredResource(
					searchQuery ? "text" : categoryQuery ? "cat" : "",
					searchQuery || categoryQuery,
					items
			  );

	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	const subCategorys =
		resourceName !== "news"
			? [...new Set(items?.map((item) => item?.category))]
			: [];

	return (
		<div className={style.container}>
			<Input
				type="text"
				placeholder="Search by title..."
				value={searchQuery}
				onChange={handleSearchChange}
			/>

			{category.length > 0 && (
				<div>
					<Tag
						color={category === "" ? "cyan" : "default"}
						onClick={() => handleCategoryChange("")}
						className={style.container__tag}
					>
						All
					</Tag>
					{subCategorys?.map((cat) => (
						<Tag
							onClick={() => handleCategoryChange(cat)}
							key={cat}
							color={category === cat ? "cyan" : "default"}
							className={style.container__tag}
						>
							{cat}
						</Tag>
					))}
				</div>
			)}

			{isLoading ? (
				<SkeletonCard />
			) : isError ? (
				<div>Something went wrong</div>
			) : (
				filteredList.map((item, i) => (
					<ItemComponent
						key={i}
						resource={item}
						handleOnClick={handleOnClick}
					/>
				))
			)}
		</div>
	);
};

export default List;
