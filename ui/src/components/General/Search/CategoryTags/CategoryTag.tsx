import { Tag } from "antd";
import { FC } from "react";

interface CategoryTagProps {
	label: string;
	selected: boolean;
	onClick: (label: string) => void;
	className?: string;
	key?: string | number;
}

const CategoryTag: FC<CategoryTagProps> = ({
	label,
	selected,
	onClick,
	...props
}) => (
	<Tag
		onClick={() => onClick(label)}
		color={selected ? "cyan" : "default"}
		{...props}
	>
		{label}
	</Tag>
);

export default CategoryTag;
