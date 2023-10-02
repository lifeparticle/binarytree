import { useContext } from "react";
import { SearchModalContext } from "lib/utils/context/SearchModalProvider";

const useModal = () => {
	return useContext(SearchModalContext);
};

export default useModal;
