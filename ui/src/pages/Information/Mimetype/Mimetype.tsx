import { FC } from "react";
import { useFetch } from "hooks";
import { MIME_KEY, MIME_URL } from "./utils/constants";
import MimeSearchResult from "./components/MimeSearchResult";

const Mimetype: FC = () => {
	const { data, isError, isLoading } = useFetch(MIME_KEY, MIME_URL);

	return (
		<MimeSearchResult isError={isError} isLoading={isLoading} data={data} />
	);
};

export default Mimetype;
