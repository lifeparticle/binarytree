interface CategoryTagProps {
	label: string;
	selected: boolean;
	onClick: (label: string) => void;
	className?: string;
	key?: string | number;
}

interface CategoryTagsProps {
	categories: string[];
	category: string;
	handleCategoryChange: (category: string) => void;
	className?: string;
}

export type { CategoryTagProps, CategoryTagsProps };
