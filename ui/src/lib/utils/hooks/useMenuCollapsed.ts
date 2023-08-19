import { useEffect, useState } from "react";
import { MOBILE_WIDTH } from "./constant";
import { getLocalstorageValue, setLocalstorageValue } from "lib/utils/helper";
import useWindowWidth from "./useWindowWidth";

export const useMenuCollapsed = (storageKey: string) => {
	const { windowWidth } = useWindowWidth(MOBILE_WIDTH);
	const initialCollapsedValue = getLocalstorageValue<boolean>(storageKey);
	const [collapsed, setCollapsed] = useState(
		initialCollapsedValue ?? windowWidth <= MOBILE_WIDTH
	);

	const toggleCollapse = () => {
		setLocalstorageValue<boolean>(storageKey, !collapsed);
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		// If initialCollapsedValue is true, we don't want to set the value
		if (!initialCollapsedValue) setCollapsed(windowWidth <= MOBILE_WIDTH);
	}, [windowWidth, initialCollapsedValue]);

	return {
		toggleCollapse,
		collapsed,
	};
};

export default useMenuCollapsed;
