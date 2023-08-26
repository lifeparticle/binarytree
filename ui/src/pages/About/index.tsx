import { Space, Table } from "antd";
import { columns, data } from "./utils/constants";
import style from "./About.module.scss";

const About = () => {
	return (
		<Space direction="vertical" className={style.about}>
			binarytree.dev offers a range of developer productivity tools to
			save time
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				title={() => "API"}
			/>
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				title={() => "Library"}
			/>
		</Space>
	);
};

export default About;
