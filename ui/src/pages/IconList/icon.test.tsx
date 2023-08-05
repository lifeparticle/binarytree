import { render, renderHook, waitFor } from "@testing-library/react";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import useFetchList from "lib/utils/hooks/useFetchList";
import { describe, test } from "vitest";
import IconList, { QUERY_KEY, URL } from ".";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Icon List component check", () => {
	test("render async call", async () => {
		const { result } = renderHook(() => useFetchList(QUERY_KEY, URL), {
			wrapper,
		});

		await waitFor(() => expect(result.current.isLoading).toEqual(true));
	});

	test("Render component without creashed", () => {
		render(wrapper(<IconList />));
	});
});
