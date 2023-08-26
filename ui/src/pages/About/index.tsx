<<<<<<< HEAD
import { Table, Typography } from "antd";
import { apiColumns, apiData, columns, data } from "./utils/constants";
=======
import { Button, Space, Table } from "antd";
import { columns, data } from "./utils/constants";
>>>>>>> upstream/main
import style from "./About.module.scss";
import Icon from "components/General/Icon";

const About = () => {
	return (
<<<<<<< HEAD
		<div className={style.about}>
			<Typography.Title level={3}>
				binarytree.dev offers a range of developer productivity tools to
				save time
			</Typography.Title>
=======
		<Space direction="vertical" className={style.about}>
			binarytree.dev offers a range of developer productivity tools to
			save time
			<Button
				type="text"
				onClick={() =>
					window.open(
						"https://github.com/lifeparticle/binarytree",
						"_blank",
						"noopener"
					)
				}
			>
				<Icon name="Github" />
			</Button>
>>>>>>> upstream/main
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
