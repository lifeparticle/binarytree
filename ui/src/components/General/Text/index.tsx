import { Typography } from "antd";
import style from "./text.module.scss";
import { useLocation } from "react-router-dom";
const { Title } = Typography;

interface TextProps {
	text: string;
	level?: 1 | 2 | 3 | 4 | 5;
}
const LIST_PAGE_COMMON_PATH = "list";

const Text: React.FC<TextProps> = ({ text, level = 4 }) => {
	const location = useLocation();

	return (
		<Title
			level={level}
			className={
				location.pathname.includes(LIST_PAGE_COMMON_PATH)
					? style.title__pageHeader
					: ""
			}
		>
			{text}
		</Title>
	);
};

export default Text;
