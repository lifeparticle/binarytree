import { Table, Typography } from "antd";
import { apiColumns, apiData, columns, data } from "./utils/constants";
import style from "./About.module.scss";

const About = () => {
	return (
		<div className={style.about}>
			<Typography.Title level={3}>
				binarytree.dev offers a range of developer productivity tools to
				save time
			</Typography.Title>
			<Table
				columns={apiColumns}
				dataSource={apiData}
				pagination={false}
				title={() => "API's"}
			/>
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				title={() => "Features"}
			/>
		</div>
	);
};

export default About;
