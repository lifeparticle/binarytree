import { Typography } from "antd";
import style from "./text.module.scss";
import { useLocation } from "react-router-dom";
import { TextProps } from "./utils/types";
import { LIST_PAGE_COMMON_PATH } from "./utils/constant";
const { Title } = Typography;

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
