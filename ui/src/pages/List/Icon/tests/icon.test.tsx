import { renderHook, waitFor } from "@testing-library/react";
import useFetchList from "lib/utils/hooks/useFetchList";
import { describe, test } from "vitest";
import { wrapper } from "test/wrapper";
<<<<<<< HEAD
import { QUERY_KEY, URL } from "pages/List/Icon/utils/contants";
=======
import { QUERY_KEY, URL } from "pages/List/Icon/utils/constants";
>>>>>>> upstream/main

describe("Icon List component check", () => {
	test("Test async call", async () => {
		const { result } = renderHook(() => useFetchList(QUERY_KEY, URL), {
			wrapper,
		});

		await waitFor(() => expect(result.current.isLoading).toEqual(true));
	});
});
