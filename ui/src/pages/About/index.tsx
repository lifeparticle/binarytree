import { Button, Space, Table } from "antd";
import { columns, data } from "./utils/constants";
import style from "./About.module.scss";
import Icon from "components/General/Icon";

const About = () => {
	return (
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
