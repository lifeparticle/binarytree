import React from "react";
import { List, Space, Tag } from "antd";
import { openLink } from "utils/helper-functions/string";

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
		name: "Avatar",
		url: "https://www.dicebear.com/styles/adventurer-neutral",
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
		name: "Jigar Panchal",
		url: "https://unsplash.com/photos/AaqI2ao96KM",
	},
	{
		key: "6",
		name: "Hassaan Here",
		url: "https://unsplash.com/photos/bKfkhVRAJTQ",
	},
	{
		key: "7",
		name: "Frontend Focus",
		url: "https://frontendfoc.us/",
	},
	{
		key: "8",
		name: "React Status",
		url: "https://react.statuscode.com/",
	},
	{
		key: "9",
		name: "Lucide",
		url: "https://lucide.dev/",
	},
	{
		key: "10",
		name: "Dudeowl",
		url: "https://99designs.com.au/profiles/dudeowl",
	},
];

const DATA = CREDITS_DATA.map((credit) => (
	<Tag key={credit.key} onClick={() => openLink(credit.url)}>
		{credit.name}
	</Tag>
));
