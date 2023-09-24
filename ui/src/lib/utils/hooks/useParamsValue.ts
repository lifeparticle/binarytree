import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface Params {
	[key: string]: string;
}

const useParamsValue = (initialParams: Params) => {
	const [searchParams, setSearchParams] = useSearchParams(initialParams);

	const updateParamsValue = useCallback(
		(key: string, value: string) => {
			setSearchParams(
				(prev) => {
					prev.set(key, value);
					return prev;
				},
				{ replace: true }
			);
		},
		[setSearchParams]
	);

	useEffect(() => {
		for (const key in initialParams) {
			if (initialParams[key]) {
				const element = initialParams[key];
				updateParamsValue(key, element);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { searchParams, setSearchParams, updateParamsValue };
};

export default useParamsValue;
