import { ConfigProvider, Layout } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import RoutesWithPageTitle from "routes";
import { Sidebar, FloatingBar } from "components/Layouts";
import CookieConsent from "pages/Footer/CookieConsent";
import { useTheme } from "hooks";
import { PopupSearch } from "components/General";
import { FC } from "react";

const { Content } = Layout;

const App: FC = () => {
	const theme = useTheme();
	var a = "testjjj";

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider theme={theme}>
				<Layout>
					<Layout hasSider>
						<Sidebar />
						<Layout>
							<Content>
								<FloatingBar />
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
