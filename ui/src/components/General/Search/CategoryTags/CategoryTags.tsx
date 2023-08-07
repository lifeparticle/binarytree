import React from "react";
import CategoryTag from "./CategoryTag";
import { Space } from "antd";

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
		<Space wrap>
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
		</Space>
	);
};

export default CategoryTags;
