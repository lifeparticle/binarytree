import React from "react";
import { List, Space, Tag } from "antd";

interface Credits {
	key: string;
	name: string;
	url: string;
}

const Credits: React.FC = () => {
	return (
		<List header={<div>Credits</div>} bordered>
			<List.Item>
				<Space wrap size="middle">
					{DATA}
				</Space>
			</List.Item>
		</List>
	);
};

export default Credits;

const CREDITS_DATA: Credits[] = [
	{
		key: "1",
		name: "thetallbloke",
		url: "https://github.com/thetallbloke",
	},
	{
		key: "2",
		name: "Open Props",
		url: "https://github.com/argyleink/open-props",
	},
	{
		key: "3",
		name: "News API",
		url: "https://newsapi.org",
	},
	{
		key: "4",
		name: "Movie for hackers",
		url: "https://github.com/k4m4/movies-for-hackers",
	},
	{
		key: "5",
		name: "unDraw",
		url: "https://undraw.co/",
	},
	{
		key: "6",
		name: "Frontend Focus",
		url: "https://frontendfoc.us/",
	},
	{
		key: "7",
		name: "React Status",
		url: "https://react.statuscode.com/",
	},
	{
		key: "8",
		name: "Lucide",
		url: "https://lucide.dev/",
	},
	{
		key: "9",
		name: "Dudeowl",
		url: "https://99designs.com.au/profiles/dudeowl",
	},
	{
		key: "10",
		name: "Vertex Designs",
		url: "https://unsplash.com/@vertex_800",
	},
];

const DATA = CREDITS_DATA.map((credit) => (
	<Tag
		key={credit.key}
		onClick={() => window.open(credit.url, "_blank", "noopener")}
	>
		{credit.name}
	</Tag>
));
