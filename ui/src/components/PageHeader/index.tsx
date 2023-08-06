import { Typography } from "antd";
import usePageTitle from "lib/utils/hooks/usePageTitle";
import { useLocation } from "react-router-dom";
import style from "./pageHeader.module.scss";

const { Title } = Typography;
const YOUTUBE = "youtube";
const GITHUB = "github";
const ICONS = "icons";

const PageHeader: React.FC = () => {
	const location = useLocation();
	const title = usePageTitle(location.pathname);

	if (
		location.pathname.includes(YOUTUBE) ||
		location.pathname.includes(GITHUB) ||
		location.pathname.includes(ICONS)
	) {
		return (
			<Title className={style.pageHeader} level={3}>
				{title}
			</Title>
		);
	}
	return <Title level={3}>{title}</Title>;
};
export default PageHeader;
