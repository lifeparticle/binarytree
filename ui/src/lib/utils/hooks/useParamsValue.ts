import { useCallback, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

interface Params {
	[key: string]: string;
}

const useParamsValue = (initialParams: Params) => {
	const count = useRef(0);

	const [searchParams, setSearchParams] = useSearchParams(initialParams);

	const updateParamsValue = useCallback(
		(key: string, value: string) => {
			console.log(key, value);
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
		if (count.current === 0) {
			for (const key in initialParams) {
				if (initialParams[key]) {
					const element = initialParams[key];
					updateParamsValue(key, element);
				}
			}
			count.current = 1;
		}
	}, [updateParamsValue, initialParams]);

	return { searchParams, setSearchParams, updateParamsValue };
};

export default useParamsValue;
