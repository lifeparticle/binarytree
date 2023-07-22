import { useLocation } from "react-router-dom";

const usePageTitle = (routes: any) => {
	const location = useLocation();

	const currentRoute = routes.find(
		(route: any) => route.path === location.pathname
	);

	return currentRoute ? currentRoute.title : "Default Title";
};

export { usePageTitle };
