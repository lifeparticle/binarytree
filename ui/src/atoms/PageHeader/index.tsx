import { Typography } from "antd";
import { usePageTitle } from "lib/utils/hooks";
import { useLocation } from "react-router-dom";
import { routes } from "routes.constant";
import style from "./pageHeader.module.scss";

const { Title } = Typography;
const youtube = "youtube";
const github = "github";

const PageHeader: React.FC = () => {
	const location = useLocation();
	const title = usePageTitle(routes);

	if (
		location.pathname.includes(youtube) ||
		location.pathname.includes(github)
	) {
		return (
			<div className={style.pageHeader}>
				<div className={style.pageHeader__container}>
					<Title level={3}>{title}</Title>
				</div>
			</div>
		);
	}
	return <Title level={3}>{title}</Title>;
};

export default PageHeader;
