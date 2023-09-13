import React from "react";
import useFetchList from "lib/utils/hooks/useFetchList";
import MimeSearchResult from "./components/MimeSearchResult";
import { MIME_KEY, MIME_URL } from "./utils/constants";

const Mimetype: React.FC = () => {
	const { data, isError, isLoading } = useFetchList(MIME_KEY, MIME_URL);

	return (
		<MimeSearchResult isError={isError} isLoading={isLoading} data={data} />
	);
};

export default Mimetype;
