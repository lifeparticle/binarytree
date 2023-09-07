import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes as RRDRoutes } from "react-router-dom";
import withPageTitle from "components/Hoc/withPageTitle";
import Text from "components/General/Text/Text";
import { API_LOADING } from "lib/utils/constants";
import { routes } from "./utils/constant";

const Routes: React.FC = () => {
	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}>
			<Suspense fallback={<Text text={API_LOADING} />}>
				<RRDRoutes>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</RRDRoutes>
			</Suspense>
		</ErrorBoundary>
	);
};
const RoutesWithPageTitle = withPageTitle(Routes);
export default RoutesWithPageTitle;
