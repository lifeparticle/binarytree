import { routes } from "data/routeData";
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

	return {
		title,
		description,
		helpText: HELP[id] || "",
		url: `https://binarytree.dev${pathname}`,
	};
};

export default usePageTitle;
