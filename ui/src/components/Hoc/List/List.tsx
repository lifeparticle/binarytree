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

// type UnionType = ListType | NewsType;

// const filteredData = < T >(searchQuery: string, items: T[], property: keyof T) => {
//     return searchQuery
//         ? items.filter((item: T) => {
// 	 if (property in item) {
//                 if (typeof item[property] === 'string') {
//                     return item[property].toLowerCase().includes(searchQuery.toLowerCase());
//                 } else if (Array.isArray(item[property])) {
//                     return item[property].some(subItem =>
//                         typeof subItem === 'string' && subItem.toLowerCase().includes(searchQuery.toLowerCase())
//                     );
//                 }
//             }
//             return false;
//           })
//         : items;
// };

const filteredNews = (searchQuery: string, items) => {
	return searchQuery
		? items.filter((item) =>
				"title" in item
					? item.title
							.toLowerCase()
							.includes(searchQuery.toLowerCase())
					: false
		  )
		: items;
};

const filteredResource = (searchQuery: string, items) => {
	return items?.filter((listItem) =>
		"subCategory" in listItem
			? listItem.subCategory.some((subcategory) =>
					subcategory
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			  )
			: false
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
			? filteredNews(searchQuery, items)
			: filteredResource(searchQuery, items);

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
