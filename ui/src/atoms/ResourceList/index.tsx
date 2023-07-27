import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Card, Input, Tag } from "antd";
import style from "./resource.module.scss";
import { ResourceType } from "./resource.type";

const ResourceList: React.FC<{ listData: ResourceType[] }> = ({ listData }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q") || "";

	const [searchQuery, setSearchQuery] = useState(query);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);
		setSearchParams(`?q=${value}`);
	};

	const filteredChannels = listData.filter((channel) =>
		channel.subCategory.some((subcategory) =>
			subcategory.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	return (
		<div className={style.container}>
			<div className={style.cardContainer}>
				<Input
					type="text"
					placeholder="Search by subcategory..."
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				{filteredChannels.map((channel, index) => (
					<a
						href={channel.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card key={index} className={style.card}>
							<Tag color="orange"> {channel.category}</Tag>
							<h2>{channel.name}</h2>
							<div>
								{channel.subCategory.map((category) => (
									<Tag color="green" key={category}>
										{category}
									</Tag>
								))}
							</div>
						</Card>
					</a>
				))}
			</div>
		</div>
	);
};

export default ResourceList;
