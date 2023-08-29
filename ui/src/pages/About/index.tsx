import { API_COLUMNS, API_DATA, DATA_COLUMNS, data } from "./utils/constants";
import { Button, Card, Space, Table, Typography } from "antd";
import style from "./About.module.scss";
import Icon from "components/General/Icon";
import about from "assets/about.jpg";

const About = () => {
	return (
		<Space direction="vertical" className={style.about}>
			<Card
				style={{ maxWidth: 800 }}
				title="Binary Tree"
				bordered={false}
				cover={
					<img
						alt="about"
						src={about}
						onClick={() =>
							window.open(
								"https://unsplash.com/photos/AaqI2ao96KM",
								"_blank"
							)
						}
					/>
				}
			>
				<Space direction="vertical" size="middle">
					<Typography.Paragraph>
						At binarytree.dev, we provide an array of developer
						productivity tools designed to help you save time. With
						an ever-growing number of features (currently{" "}
						<b>{data.length}</b>), our platform is constantly
						evolving to meet the needs of developers like you.
					</Typography.Paragraph>

					<Table
						columns={DATA_COLUMNS}
						dataSource={data}
						pagination={false}
						title={() => "Features"}
						bordered
						scroll={{ x: "calc(50%)", y: 800 }}
					/>

					<Table
						columns={API_COLUMNS}
						dataSource={API_DATA}
						pagination={false}
						title={() => "API's"}
						bordered
					/>
					<div className={style.about__socials}>
						<Button
							className={style.about__socials_button}
							key="Github"
							type="primary"
							shape="circle"
							icon={<Icon name="Github" />}
							onClick={() =>
								window.open(
									"https://github.com/lifeparticle/binarytree",
									"_blank",
									"noopener"
								)
							}
						/>
					</div>
				</Space>
			</Card>
		</Space>
	);
};

export default About;
