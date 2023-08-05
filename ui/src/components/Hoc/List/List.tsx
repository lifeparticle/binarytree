import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "antd";
import style from "./list.module.scss";
import { ListProps } from "./types";
import SkeletonCard from "components/General/ListItems/SkeletonCard";
import { ResourceType } from "components/General/ListItems/Resource/resource.type";
import { NewsType } from "components/General/ListItems/News/news.types";

const filteredNews = (searchQuery: string, items: NewsType[]) => {
	if (searchQuery) {
		return items.filter((item) =>
			item.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}
	return items;
};

const filteredResource = (searchQuery: string, items: ResourceType[]) => {
	return items?.filter((listItem) =>
		listItem.subCategory.some((subcategory) =>
			subcategory.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
};

const List: React.FC<ListProps<NewsType | ResourceType>> = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
	isLoading,
	isError,
}) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q") || "";
	const [searchQuery, setSearchQuery] = useState(query);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);
		setSearchParams(`?q=${value}`);
	};

	const filteredList =
		resourceName === "news"
			? filteredNews(searchQuery, items as NewsType[])
			: filteredResource(searchQuery, items as ResourceType[]);

	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className={style.container}>
			<Input
				type="text"
				placeholder="Search..."
				value={searchQuery}
				onChange={handleSearchChange}
				className={style.container_input}
			/>
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
