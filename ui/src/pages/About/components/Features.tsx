import { FC } from "react";
import { List, Card, Space, Tag } from "antd";
import { FEATURE_DATA } from "data/featureData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Features: FC = () => {
	return (
		<List header={<div>Features</div>} bordered>
			<Carousel autoPlay={true} infiniteLoop={true}>
				{FEATURE_DATA.filter((feature) => !feature.in_progress).map(
					(feature, index) => (
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
										{index} - {feature.name}
									</h5>
								</a>
							}
							actions={[
								<Space key={feature.key}>
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
														lib.name ===
														"Vanilla JS"
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
					)
				)}
			</Carousel>
		</List>
	);
};

export default Features;
