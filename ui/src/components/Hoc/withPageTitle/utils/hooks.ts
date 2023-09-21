import { routes } from "pages/Routes/utils/constant";
import { useLocation } from "react-router-dom";
import { HELP } from "./constants";

const usePageTitle = () => {
	const { pathname } = useLocation();
	const page = routes.find((route) => route.path === pathname) || {
		title: "Page Not Found",
		description: "",
		id: "",
	};

	const { title, description, id } = page;
	return [title, description, HELP[id] || ""];
};

export default usePageTitle;
