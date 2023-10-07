import React from "react";
import { List, Carousel, Card, Space } from "antd";
import { Tag } from "antd";
import { FEATURE_DATA } from "../../../data/featureData";
import { openLink } from "utils/helper-functions/string";

const Features: React.FC = () => {
	return (
		<List header={<div>Features</div>} bordered>
			<Carousel autoplay dotPosition={"bottom"}>
				{FEATURE_DATA.map((feature, index) => (
					<Card
						bordered={false}
						key={feature.key}
						title={
							<h5 onClick={() => openLink(feature.link)}>
								<a>
									{index} - {feature.name}
								</a>
							</h5>
						}
						actions={[
							<Space>
								{feature.library.map((lib) => {
									return (
										<a
											key={lib.url}
											href={lib.url}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Tag
												color={
													lib.name === "Vanilla JS"
														? "green"
														: "gold"
												}
											>
												{lib.name}
											</Tag>
										</a>
									);
								})}
							</Space>,
						]}
					>
						{feature.description}
						<br />
						<br />
					</Card>
				))}
			</Carousel>
		</List>
	);
};

export default Features;
