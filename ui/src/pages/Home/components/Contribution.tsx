import React from "react";
import style from "pages/Home/Home.module.scss";
import { Space, Typography } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";
import { openLink } from "utils/helper-functions/string";

const Contribution: React.FC = () => {
	return (
		<section className={style.home__contribution}>
			<Space direction="vertical">
				<Typography.Title level={2}>
					Join our community
				</Typography.Title>
				<Typography.Paragraph>
					Join our open-source community and help shape the future of
					Modern web
				</Typography.Paragraph>
				<ResponsiveButton
					onClick={() =>
						openLink("https://github.com/lifeparticle/binarytree")
					}
				>
					Github Discussion
				</ResponsiveButton>
			</Space>
		</section>
	);
};

export default Contribution;
