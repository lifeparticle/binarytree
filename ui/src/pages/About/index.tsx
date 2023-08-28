import { API_COLUMNS, API_DATA, DATA_COLUMNS, data } from "./utils/constants";
import { Button, Space, Table, Typography } from "antd";
import style from "./About.module.scss";
import Icon from "components/General/Icon";

const About = () => {
	return (
		<Space direction="vertical" className={style.about}>
			<Typography.Title level={3}>Binary Tree</Typography.Title>

			<Typography.Paragraph>
				binarytree.dev offers a range of developer productivity tools to
				save time.
			</Typography.Paragraph>

			<Table
				columns={API_COLUMNS}
				dataSource={API_DATA}
				pagination={false}
				title={() => "API's"}
			/>
			<Table
				columns={DATA_COLUMNS}
				dataSource={data}
				pagination={false}
				title={() => "Features"}
			/>

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
		</Space>
	);
};

export default About;
