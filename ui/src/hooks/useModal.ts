import { useContext } from "react";
import { SearchModalContext } from "utils/context/SearchModalProvider";

const useModal = () => {
	return useContext(SearchModalContext);
};

export default useModal;
