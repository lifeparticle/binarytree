import type { SizeType } from "antd/es/config-provider/SizeContext";
import useWindowWidth from "./useWindowWidth";
import { MOBILE_WIDTH } from "data/constants";

const useGetSize = () => {
	const { windowWidth } = useWindowWidth();

	const size: SizeType = windowWidth > MOBILE_WIDTH ? "large" : "middle";
	return { size };
};

export default useGetSize;
