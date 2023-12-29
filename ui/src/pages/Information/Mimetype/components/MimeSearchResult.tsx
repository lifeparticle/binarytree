import { Card, Table } from "antd";
import { FC } from "react";
import MimeSearch from "./SearchBar";
import { filteredMimeType } from "pages/Information/Mimetype/helper";
import useParamsValue from "hooks/useParamsValue";
import { ColumnsType } from "antd/es/table";
import { Tag } from "antd";
import { CodeHighlightWithCopy } from "components/General";
import { PARAMS } from "data/paramsData";

interface MimeTableDataType {
	name: string;
	example: string;
	code: { "content-type": string };
}

interface MimeSearchResultProps {
	data: MimeTableDataType[];
	isLoading: boolean;
	isError: boolean;
}

const MimeSearchResult: FC<MimeSearchResultProps> = ({
	data,
	isError,
	isLoading,
}) => {
	const { searchParams } = useParamsValue({
		type: "",
	});

	const searchQuery = String(searchParams.get(PARAMS.type));

	if (isError) {
		return <div>Something went wrong!</div>;
	}

	const list = searchQuery ? filteredMimeType(data, searchQuery) : data;

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

const MIME_COLUMNS: ColumnsType<MimeTableDataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		render: (value) => {
			return <Tag>{value}</Tag>;
		},
	},
	{
		title: "Example",
		dataIndex: "example",
		key: "example",
		render: (value) => {
			return (
				<div>
					<p>{value}</p>
				</div>
			);
		},
	},
	{
		title: "JavaScript code",
		dataIndex: "code",
		key: "code",
		width: 200,
		render: (value) => {
			return (
				<div>
					<CodeHighlightWithCopy
						language="typescript"
						codeString={JSON.stringify(value)}
					/>
				</div>
			);
		},
	},
];

export default MimeSearchResult;
