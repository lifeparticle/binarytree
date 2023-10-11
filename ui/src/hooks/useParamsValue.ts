import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

interface Params {
	[key: string]: string;
}

const useParamsValue = (initialParams: Params) => {
	const [searchParams, setSearchParams] = useSearchParams(initialParams);
	const hasRan = useRef(false);

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
		if (!hasRan.current) {
			for (const key in initialParams) {
				if (initialParams[key]) {
					const element = initialParams[key];
					updateParamsValue(key, element);
					hasRan.current = true;
				}
			}
		}
	}, [initialParams, updateParamsValue]);

	return { searchParams, setSearchParams, updateParamsValue };
};

export default useParamsValue;
