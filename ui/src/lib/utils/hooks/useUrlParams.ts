import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface Params {
	[key: string]: string | number | null;
}

const useUrlParams = (initialParams: Params) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [params, setParams] = useState<Params>(initialParams);

	useEffect(() => {
		let updated = false;
		const newParams = { ...params };

		Object.keys(initialParams).forEach((key) => {
			const value = searchParams.get(key);

			if (value !== null && params[key] !== value) {
				newParams[key] = value;
				updated = true;
			}
		});

		if (updated) {
			setParams(newParams);
		}
	}, [searchParams, initialParams, params]);

	const updateUrlParam = (key: string, value: string | number) => {
		searchParams.set(key, String(value));
		setSearchParams(searchParams);
		setParams((prevParams) => ({ ...prevParams, [key]: value }));
	};

	return [params, updateUrlParam, searchParams] as const;
};

export default useUrlParams;
