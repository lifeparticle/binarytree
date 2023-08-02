import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "antd";
import style from "./resource.module.scss";
// ... other imports ...

import { ListProps } from "./types";
import SkeletonCard from "components/General/ListItems/SkeletonCard";

interface ListType {
	subCategory: string[];
}

interface NewsType {
	title: string;
}

type UnionType = ListType | NewsType;

const List = <T extends UnionType>({
	items,
	resourceName,
	itemComponent: ItemComponent,
	isLoading,
	isError,
}: ListProps<T>) => {
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
			? searchQuery
				? items?.filter((item) =>
						"title" in item
							? item.title
									.toLowerCase()
									.includes(searchQuery.toLowerCase())
							: false
				  )
				: items
			: items?.filter((listItem) =>
					"subCategory" in listItem
						? listItem.subCategory.some((subcategory) =>
								subcategory
									.toLowerCase()
									.includes(searchQuery.toLowerCase())
						  )
						: false
			  );

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
