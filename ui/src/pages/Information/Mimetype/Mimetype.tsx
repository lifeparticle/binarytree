import { FC } from "react";
import { useFetch } from "hooks";
import MimeSearchResult from "./components/MimeSearchResult";

const MIME_URL = "/mime/data.json";
const MIME_KEY = "mimetype";

const Mimetype: FC = () => {
	const { data, isError, isLoading } = useFetch(MIME_KEY, MIME_URL);

	return (
		<MimeSearchResult isError={isError} isLoading={isLoading} data={data} />
	);
};

export default Mimetype;
