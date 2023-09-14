import { Input } from "antd";
import style from "./search.module.scss";
import { QUERY_KEY_NEWS } from "pages/Newsfeed";
import { useSearchParams } from "react-router-dom";
import CategoryTags from "./CategoryTags";
import { useState, useEffect, ChangeEvent } from "react";

interface SearchProps {
	categories: string[];
	resourceName: string;
	isLoading: boolean;
}

const Search: React.FC<SearchProps> = ({
	resourceName,
	categories,
	isLoading,
}) => {
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

	return (
		<div className={style.search}>
			<Input
				size="large"
				type="text"
				placeholder="Search by title..."
				value={searchQuery}
				onChange={handleSearchChange}
				disabled={isLoading}
			/>

			<CategoryTags
				categories={categories}
				category={categoryQuery}
				handleCategoryChange={handleCategoryChange}
				className={style.search__category}
			/>
		</div>
	);
};

export default Search;
