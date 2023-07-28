import { useEffect, useState } from "react";
import { MOBILE_WIDTH } from "./constant";
import { getLocalstorageValue, setLocalstorageValue } from "../helper";
import useWindowWidth from "./useWindowWidth";

export const useMenuCollapsed = (storageKey: string) => {
	const { windowWidth } = useWindowWidth(MOBILE_WIDTH);
	const [collapsed, setCollapsed] = useState(() => {
		return (
			getLocalstorageValue<boolean>(storageKey) ??
			windowWidth <= MOBILE_WIDTH
		);
	});

	const toggleCollapse = () => {
		setLocalstorageValue<boolean>(storageKey, !collapsed);
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		const value = windowWidth <= MOBILE_WIDTH;
		if (value) {
			setLocalstorageValue<boolean>(storageKey, value);
			setCollapsed(value);
		}
	}, [windowWidth, storageKey]);

	return {
		toggleCollapse,
		collapsed,
	};
};

export default useMenuCollapsed;
