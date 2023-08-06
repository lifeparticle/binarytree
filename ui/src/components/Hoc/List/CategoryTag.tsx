import { Tag } from "antd";

export interface CategoryTagProps {
	label: string;
	selected: boolean;
	onClick: (label: string) => void;
	className?: string;
	key?: string | number;
}

const CategoryTag: React.FC<CategoryTagProps> = ({
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
