import { Table } from "antd";
import React from "react";
import { MIME_COLUMNS, MIME_DATA } from "./utils/constants";

const Mimetype: React.FC = () => {
	return (
		<div>
			<Table
				columns={MIME_COLUMNS}
				dataSource={MIME_DATA}
				pagination={false}
				title={() => "Features"}
				bordered
				scroll={{ x: "calc(50%)" }}
			/>
		</div>
	);
};

export default Mimetype;
