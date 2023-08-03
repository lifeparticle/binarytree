import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "antd";
import style from "./resource.module.scss";
import { ListProps } from "./types";
import SkeletonCard from "components/General/ListItems/SkeletonCard";

interface ListType {
	subCategory: string[];
}

interface NewsType {
	title: string;
}

const filteredNews = <T extends NewsType>(searchQuery: string, items: T[]) => {
	return searchQuery
		? items.filter((item) =>
				item.title.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: items;
};

const filteredResource = <T extends ListType>(
	searchQuery: string,
	items: T[]
) => {
	return items?.filter((listItem) =>
		listItem.subCategory.some((subcategory) =>
			subcategory.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
};

const List: React.FC<ListProps<ListType | NewsType>> = ({
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
			: filteredResource(searchQuery, items as ListType[]);

	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className={style.container}>
			<div className={style.cardContainer}>
				<Input
					type="text"
					placeholder="Search..."
					value={searchQuery}
					onChange={handleSearchChange}
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
		</div>
	);
};

export default List;
