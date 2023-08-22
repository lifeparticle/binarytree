import { useContext } from "react";

import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { ConfigProvider, Layout } from "antd";

import { ErrorBoundary } from "react-error-boundary";
import RoutesWithPageTitle from "pages/Routes";
import Sidebar from "components/Layouts/Sidebar";

const { Content } = Layout;

const App: React.FC = () => {
	const { algorithm } = useContext(DarkModeContext);

	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<ConfigProvider theme={{ algorithm }}>
				<Layout>
					<Layout hasSider>
						<Sidebar />
						<Layout>
							<Content>
								<RoutesWithPageTitle />
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</ConfigProvider>
		</ErrorBoundary>
	);
};

export default App;
