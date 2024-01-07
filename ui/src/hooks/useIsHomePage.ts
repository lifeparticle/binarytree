import { useLocation } from "react-router-dom";

const useIsHomePage = () => {
	const location = useLocation();
	const isHomePage = location.pathname !== "/";
	return isHomePage;
};

export default useIsHomePage;
