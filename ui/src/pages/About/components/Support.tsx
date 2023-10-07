import { List, Typography } from "antd";
import React from "react";

const Support: React.FC = () => {
	return (
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
	);
};

export default Support;

const APP_SUPPORT = [
	<>
		Fancy giving this project a little love? Why not become a superstar
		through{" "}
		<a href="https://github.com/sponsors/lifeparticle">GitHub Sponsors.</a>?
		Whether you choose to shower us with monthly sprinkles of support or a
		one-time generosity bomb, your backing truly counts! Remember, your
		contribution helps keep our gears grinding and our spirits soaring. So,
		come on board and make a difference!
	</>,
];
