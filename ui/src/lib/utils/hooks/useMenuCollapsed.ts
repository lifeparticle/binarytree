import { useEffect, useState, useRef } from "react";
import { MOBILE_WIDTH } from "./constant";
import { getLocalstorageValue, setLocalstorageValue } from "lib/utils/helper";
import useWindowWidth from "./useWindowWidth";

export const useMenuCollapsed = (storageKey: string) => {
	const isFirstRender = useRef(true);
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
		const value = windowWidth <= MOBILE_WIDTH;

		if (isFirstRender.current) {
			isFirstRender.current = false;
		} else {
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
