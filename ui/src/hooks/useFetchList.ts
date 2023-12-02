import { useQuery } from "@tanstack/react-query";
import { getData } from "api/API";

export default function useFetchList(key: string, url: string) {
	const { data, isLoading, isError, error, isSuccess } = useQuery({
		queryKey: [key],
		queryFn: () => {
			return getData(url);
		},
	});

	return { data, isLoading, isError, error, isSuccess };
}
