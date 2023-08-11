import { Typography } from "antd";
import style from "./text.module.scss";
import { useLocation } from "react-router-dom";

const { Title } = Typography;

interface TextProps {
	text: string;
}

const LIST_PAGE_COMMON_PATH = "list";

const Text: React.FC<TextProps> = ({ text }) => {
	const location = useLocation();

	return (
		<Title
			level={3}
			className={
				location.pathname.includes(LIST_PAGE_COMMON_PATH)
					? style.pageHeader
					: ""
			}
		>
			{text}
		</Title>
	);
};

export default Text;
