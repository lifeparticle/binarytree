import { Typography } from "antd";
import { usePageTitle } from "lib/utils/hooks";
import { useLocation } from "react-router-dom";
import { routes } from "routes.constant";

const { Title } = Typography;
const YOUTUBE = "youtube";
const GITHUB = "github";

const PageHeader: React.FC = () => {
	const location = useLocation();
	const title = usePageTitle(routes);

	if (
		location.pathname.includes(YOUTUBE) ||
		location.pathname.includes(GITHUB)
	) {
		return (
			<Title style={{ textAlign: "center" }} level={3}>
				{title}
			</Title>
		);
	}
	return <Title level={3}>{title}</Title>;
};
export default PageHeader;
