import { useQuery } from "@tanstack/react-query";
import { getData } from "api/API";

export default function useFetch(key: string, url: string) {
	const { data, isLoading, isError } = useQuery({
		queryKey: [key],
		queryFn: () => {
			return getData(url);
		},
		enabled: !!url, // only run when url is not empty
	});

	return { data, isLoading, isError };
}
