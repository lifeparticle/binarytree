import { useQuery } from "@tanstack/react-query";
import { getData } from "api/API";
import { DEFAULT_RECORD, parsedMarkdown } from "components/General";

const useGetNotifications = (key: string, url: string) => {
	const {
		data: notifications,
		isLoading,
		isError,
	} = useQuery({
		queryKey: [key],
		queryFn: async () => {
			if (import.meta.env.MODE === "development") {
				return DEFAULT_RECORD;
			} else {
				const data = await getData(url);
				return parsedMarkdown(data);
			}
		},
	});

	return {
		notifications,
		isLoading,
		isError,
	};
};

export default useGetNotifications;
