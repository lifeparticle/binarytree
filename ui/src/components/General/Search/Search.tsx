import { Input } from "antd";
import style from "./search.module.scss";
import CategoryTags from "./CategoryTags";
import { ChangeEvent } from "react";

interface SearchProps {
	categories: string[];
	resourceName: string;
	isLoading: boolean;
	searchQuery: string;
	categoryQuery: string;
	onSearchCriteriaChange: (queryType: "q" | "cat", value: string) => void;
}

const Search: React.FC<SearchProps> = ({
	categories,
	isLoading,
	searchQuery,
	categoryQuery,
	onSearchCriteriaChange,
}) => {
	return (
		<div className={style.search}>
			<Input
				size="large"
				type="text"
				placeholder="Search by title..."
				value={searchQuery}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					onSearchCriteriaChange("q", e.target.value);
				}}
				disabled={isLoading}
			/>

			<CategoryTags
				categories={categories}
				category={categoryQuery}
				handleCategoryChange={(value: string) => {
					onSearchCriteriaChange("cat", value);
				}}
				className={style.search__category}
			/>
		</div>
	);
};

export default Search;
