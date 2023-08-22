import { Tag } from "antd";
import { CategoryTagProps } from "./utils/types";

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
