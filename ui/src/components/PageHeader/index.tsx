import { Typography } from "antd";
import usePageTitle from "lib/utils/hooks/usePageTitle";
import { useLocation } from "react-router-dom";
import style from "./pageHeader.module.scss";

const { Title } = Typography;
const LIST_PAGE_COMMON_PATH = "list";

const PageHeader: React.FC = () => {
	const location = useLocation();
	const title = usePageTitle(location.pathname);

	if (location.pathname.includes(LIST_PAGE_COMMON_PATH)) {
		return (
			<Title className={style.pageHeader} level={3}>
				{title}
			</Title>
		);
	}
	return <Title level={3}>{title}</Title>;
};
export default PageHeader;
