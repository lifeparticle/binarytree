import { renderHook, waitFor } from "@testing-library/react";
import { useFetchList } from "hooks";
import { describe, test } from "vitest";
import { wrapper } from "test/wrapper";
import { QUERY_KEY, URL } from "pages/Resource/Icon/Icon";

describe("Icon List component check", () => {
	test("Test async call", async () => {
		const { result } = renderHook(() => useFetchList(QUERY_KEY, URL), {
			wrapper,
		});

		await waitFor(() => expect(result.current.isLoading).toEqual(true));
	});
});
