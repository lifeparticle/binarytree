import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { ConfigProvider, Layout } from "antd";
import { ErrorBoundary } from "react-error-boundary";
import RoutesWithPageTitle from "pages/Routes";
import Sidebar from "components/Layouts/Sidebar";
import FloatingHeader from "components/Layouts/FloatingHeader";
import CookieConsent from "pages/Footer/CookieConsent";

const { Content } = Layout;

const App: React.FC = () => {
	const { algorithm } = useContext(DarkModeContext);

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider
				theme={{
					algorithm,
					token: {
						colorPrimary: "#333333",
					},
				}}
			>
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
		</ErrorBoundary>
	);
};

export default App;
