import { Card, Table } from "antd";
import React from "react";
import MimeSearch from "./SearchBar";
import { MIME_COLUMNS } from "pages/Info/Mimetype/utils/constants";
import { MimeSearchResultPropsType } from "pages/Info/Mimetype/utils/types";
import { useSearchParams } from "react-router-dom";
import { filteredMimeType } from "pages/Info/Mimetype/utils/helper";

const MimeSearchResult: React.FC<MimeSearchResultPropsType> = ({
	data,
	isError,
	isLoading,
}) => {
	const [searchParams] = useSearchParams();

	const searchQuery = searchParams.get("type") || "";

	if (isError) {
		return <div>Something went wrong!</div>;
	}

	const list = data
		? searchQuery
			? filteredMimeType(data, searchQuery)
			: data
		: [];
	return (
		<Card>
			<MimeSearch />
			<Table
				columns={MIME_COLUMNS}
				dataSource={list}
				pagination={false}
				bordered
				scroll={{ x: "calc(50%)" }}
				loading={isLoading}
			/>
		</Card>
	);
};

export default MimeSearchResult;
