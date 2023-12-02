import type { SizeType } from "antd/es/config-provider/SizeContext";
import { MOBILE_WIDTH } from "data/constants";
import useWindowWidth from "./useWindowWidth";

export default function useGetSize() {
	const { windowWidth } = useWindowWidth();

	const size: SizeType = windowWidth > MOBILE_WIDTH ? "large" : "middle";
	return { size };
}
