import React from "react";

import useFetchList from "lib/utils/hooks/useFetchList";
import MimeSearchResult from "./components/MimeSearchResult";

const Mimetype: React.FC = () => {
	const { data, isError, isLoading } = useFetchList(
		"mime",
		"/mime/data.json"
	);

	return (
		<MimeSearchResult isError={isError} isLoading={isLoading} data={data} />
	);
};

export default Mimetype;
