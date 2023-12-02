import { useContext } from "react";
import { SearchModalContext } from "utils/context/SearchModalProvider";

export default function useModal() {
	return useContext(SearchModalContext);
}
