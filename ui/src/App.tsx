import { ConfigProvider, Layout } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import RoutesWithPageTitle from "pages/Routes";
import Sidebar from "components/Layouts/Sidebar";
import FloatingHeader from "components/Layouts/FloatingHeader";
import CookieConsent from "pages/Footer/CookieConsent";
import useTheme from "lib/utils/hooks/useTheme";
import PopupSearch from "components/General/PopupSearch";

const { Content } = Layout;

const App: React.FC = () => {
	const theme = useTheme();

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider theme={theme}>
				<Layout>
					<Layout hasSider>
						<Sidebar />
						<Layout>
							<Content>
								<FloatingHeader />
								<RoutesWithPageTitle />
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</ConfigProvider>
			<CookieConsent />
			<PopupSearch />
		</ErrorBoundary>
	);
};

export default App;
