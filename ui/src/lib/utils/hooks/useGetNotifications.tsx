import { useQuery } from "@tanstack/react-query";
import { DEFAULT_RECORD } from "components/General/Notification/utils/constants";
import { parsedMarkdown } from "components/General/Notification/utils/helper";

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
				const response = await fetch(url);
				const content = await response.text();

				const entries = parsedMarkdown(content);

				return entries;
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
