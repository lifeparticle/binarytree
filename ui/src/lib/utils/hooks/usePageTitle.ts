import { ROUTES } from "pages/Routes/constant";

const usePageTitle = (pathname: string) => {
	const pageTitle = ROUTES.find((route) => route.path === pathname)?.title;
	return pageTitle ? pageTitle : "Page Not Found";
};

export default usePageTitle;
