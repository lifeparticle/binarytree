import { routes } from "data/routeData";
import { useLocation, useSearchParams } from "react-router-dom";
import { BEAM, HELP } from "./constants";

const usePageTitle = () => {
	const { pathname } = useLocation();
	const page = routes.find((route) => route.path === pathname) || {
		title: "Page Not Found",
		description: "",
		id: "",
	};

	const { title, description, id } = page;

	const searchParams = useSearchParams();
	const color = searchParams[0].get("color") || "";

	const beams = BEAM[id]
		? BEAM[id].map((beam) => ({ ...beam, queryParams: { color } }))
		: [];

	return {
		title,
		description,
		helpObject: HELP[id] || {},
		beamObject: beams,
		url: `https://binarytree.dev${pathname}`,
	};
};

export default usePageTitle;
