import { routes } from "constant/routes.contant";
import { useRoutes } from "react-router-dom";

export default function Router() {
	return useRoutes(routes);
}
