import { renderHook, waitFor } from "@testing-library/react";
import useFetchList from "lib/utils/hooks/useFetchList";
import { describe, test } from "vitest";
import { wrapper } from "test/wrapper";
import { QUERY_KEY, URL } from "pages/List/Icon/utils/constants";

describe("Icon List component check", () => {
	test("Test async call", async () => {
		const { result } = renderHook(() => useFetchList(QUERY_KEY, URL), {
			wrapper,
		});

		await waitFor(() => expect(result.current.isLoading).toEqual(true));
	});
});
