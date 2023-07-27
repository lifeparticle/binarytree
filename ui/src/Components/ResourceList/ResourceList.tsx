import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Avatar, Card, Input, Skeleton, Space, Tag } from "antd";
import style from "./resource.module.scss";
import { ResourceListProps } from "./resource.type";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

const ResourceList: React.FC<ResourceListProps> = ({ listData }) => {
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

	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className={style.container}>
			<div className={style.cardContainer}>
				<Input
					type="text"
					placeholder="Search by subcategory..."
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				{filteredChannels.map((channel) => (
					<Card
						className={style.card}
						actions={[
							<SettingOutlined key="setting" />,
							<EditOutlined key="edit" />,
							<EllipsisOutlined key="ellipsis" />,
						]}
						key={channel.name}
						hoverable
						onClick={() => handleOnClick(channel.url)}
					>
						<Skeleton loading={false} avatar active>
							<Meta
								avatar={
									<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
								}
								title={channel.name}
								description={channel.category}
							/>
							<Space size="large" direction="horizontal" wrap>
								{channel.subCategory.map((category) => (
									<Tag color="green" key={category}>
										{category}
									</Tag>
								))}
							</Space>
						</Skeleton>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ResourceList;
