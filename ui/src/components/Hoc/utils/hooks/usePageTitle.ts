import { routes } from "pages/Routes/utils/constant";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
	const location = useLocation();
	const page = routes.find((route) => route.path === location.pathname);
	return [page?.title ?? "Page Not Found", page?.description ?? ""];
};

export default usePageTitle;
