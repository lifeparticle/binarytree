import { ROUTES } from "pages/Routes/utils/constant";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
	const location = useLocation();
	const pageTitle = ROUTES.find(
		(route) => route.path === location.pathname
	)?.title;
	return pageTitle ? pageTitle : "Page Not Found";
};

export default usePageTitle;
