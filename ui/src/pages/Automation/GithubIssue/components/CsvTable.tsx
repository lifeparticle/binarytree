import React from "react";
import { Table } from "antd";
import { IssueType } from "pages/Automation/GithubIssue/index";

interface CsvTableProps {
	data: IssueType[];
}

type DataColumn = {
	title: string;
	dataIndex: string;
	key: string;
};

const CsvTable: React.FC<CsvTableProps> = ({ data }) => {
	const columns: DataColumn[] = [];

	if (data.length > 0) {
		const headers = Object.keys(data[0]);

		headers.forEach((header) => {
			columns.push({
				title: header,
				dataIndex: header,
				key: header,
			});
		});
	}

	return (
		<Table scroll={{ x: "400px" }} dataSource={data} columns={columns} />
	);
};

export default CsvTable;
