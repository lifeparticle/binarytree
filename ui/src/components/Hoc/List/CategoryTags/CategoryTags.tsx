import React from "react";
import CategoryTag from "./CategoryTag";

interface CategoryTagsProps {
	categories: string[];
	category: string;
	handleCategoryChange: (category: string) => void;
	className?: string;
}

const CategoryTags: React.FC<CategoryTagsProps> = ({
	categories,
	category,
	handleCategoryChange,
	className,
}) => {
	if (categories.length === 0) return null;

	return (
		<div>
			<CategoryTag
				label="All"
				selected={category === ""}
				onClick={handleCategoryChange}
				className={className}
			/>
			{categories.map((cat) => (
				<CategoryTag
					label={cat}
					selected={category === cat}
					onClick={handleCategoryChange}
					key={cat}
					className={className}
				/>
			))}
		</div>
	);
};

export default CategoryTags;
