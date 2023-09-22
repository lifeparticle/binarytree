import {
	FEATURE_COLUMNS,
	FEATURE_DATA,
	APP_VALUES,
	APP_SUPPORT,
	OTHER_COLUMNS,
	OTHER_DATA,
} from "./utils/constants";
import { Card, List, Table, Typography } from "antd";
import style from "./About.module.scss";
import about from "assets/about.jpg";
import Footer from "components/Layouts/Footer";

const About = () => {
	return (
		<>
			<Card
				className={style.about}
				title="Binary Tree"
				bordered={false}
				cover={
					<div className={style.about__intro}>
						<div className={style.about__intro_wrapper}>
							<Typography.Paragraph
								className={style.about__intro_wrapper_text}
							>
								At binarytree.dev, we provide an array of
								developer productivity tools designed to help
								you save time. With an{" "}
								<a
									href="https://github.com/users/lifeparticle/projects/2"
									target="_blank"
								>
									ever-growing number of features
								</a>{" "}
								(currently <b>{FEATURE_DATA.length}</b>), our
								platform is constantly evolving to meet the
								needs of developers like you.
							</Typography.Paragraph>
						</div>
						<img
							loading="lazy"
							alt="about"
							src={about}
							className={style.about__intro_img}
							onClick={() =>
								window.open(
									"https://unsplash.com/photos/AaqI2ao96KM",
									"_blank"
								)
							}
						/>
					</div>
				}
			>
				<div className={style.about__container}>
					<List
						header={<div>Values</div>}
						bordered
						dataSource={APP_VALUES}
						renderItem={(item) => (
							<List.Item>
								<Typography.Text>{item}</Typography.Text>
							</List.Item>
						)}
					/>

					<Table
						columns={FEATURE_COLUMNS}
						dataSource={FEATURE_DATA}
						pagination={false}
						title={() => "Features"}
						bordered
						scroll={{ x: "calc(50%)" }}
					/>

					<Table
						columns={OTHER_COLUMNS}
						dataSource={OTHER_DATA}
						pagination={false}
						title={() => "Others"}
						scroll={{ x: "calc(50%)" }}
						bordered
					/>

					<List
						header={<div>Support</div>}
						bordered
						dataSource={APP_SUPPORT}
						renderItem={(item) => (
							<List.Item>
								<Typography.Text>{item}</Typography.Text>
							</List.Item>
						)}
					/>
				</div>
			</Card>

			<Footer />
		</>
	);
};

export default About;
