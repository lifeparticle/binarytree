import React from "react";
import { Card, Space, Tag } from "antd";
import { FEATURE_DATA } from "data/featureData";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Features: React.FC = () => {
	return (
		<Carousel autoPlay={true} infiniteLoop={true}>
			{FEATURE_DATA.map((feature, index) => (
				<Card
					bordered={false}
					key={feature.key}
					title={
						<a
							href={feature.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<h5>
								<a>
									{index} - {feature.name}
								</a>
							</h5>
						</a>
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
					{feature.fullDescription.length > 0
						? feature.fullDescription
						: feature.shortDescription}
					<br />
					<br />
				</Card>
			))}
		</Carousel>
	);
};

export default Features;
