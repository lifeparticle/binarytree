import React from "react";
import { List, Typography } from "antd";

const APP_VALUES = [
	<>
		<Typography.Text strong>Easily Shareable Links:</Typography.Text>{" "}
		Sharing information should be as straightforward as possible. That's why
		we provide easily shareable links for{" "}
		<a
			href="colors/shades-tints?color=%23559D81&numShades=10"
			target="_blank"
		>
			Shades & Tints
		</a>
		,{" "}
		<a href="resource/course?q=&cat=React" target="_blank">
			Resources
		</a>
		, and more. This feature not only enhances collaboration but also
		improves overall productivity.
	</>,
	<>
		<Typography.Text strong>Data Verification:</Typography.Text> Data
		integrity is crucial in software development. Our platform allows you to
		verify essential data such as{" "}
		<a href="converter/base-64" target="_blank">
			Base64
		</a>
		,{" "}
		<a href="converter/jtt" target="_blank">
			JSON
		</a>
		, and others, ensuring accuracy and reliability in your projects.
	</>,
	<>
		<Typography.Text strong>Smart Data Detection:</Typography.Text> Our
		platform is equipped with intelligent data detection capabilities to
		simplify your tasks. With smart data detection, it can automatically{" "}
		<a href="data/sorting" target="_blank">
			Sort
		</a>{" "}
		your data, saving you time and hassle.
	</>,
];

const Values: React.FC = () => {
	return (
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
	);
};

export default Values;
