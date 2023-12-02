import { useEffect, useState } from "react";
import {
	getLocalstorageValue,
	setLocalstorageValue,
} from "utils/helper-functions/storage";
import useWindowWidth from "./useWindowWidth";
import { MOBILE_WIDTH } from "data/constants";

const useMenuCollapsed = (storageKey: string) => {
	const { windowWidth } = useWindowWidth();
	const initialCollapsedValue = getLocalstorageValue<boolean>(storageKey);

	const isMobileWidth = windowWidth <= MOBILE_WIDTH;
	const initialState =
		isMobileWidth || (initialCollapsedValue ?? isMobileWidth);

	const [collapsed, setCollapsed] = useState(initialState);

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
