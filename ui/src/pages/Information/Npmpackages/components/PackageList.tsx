import { Card, Col, Row, Skeleton, Space, Tag, Typography } from "antd";
import React from "react";
import { PackageListProps } from "../utils/types";
import style from "pages/Information/Npmpackages/Npmpackages.module.scss";

const { Title } = Typography;

const PackageList: React.FC<PackageListProps> = ({ packages, isLoading }) => {
	const onClick = (url: string) => {
		window.open(url, "_blank", "noopener");
	};
	return (
		<Row gutter={[16, 16]} className={style.npm}>
			{packages.map((info) => (
				<Col key={info.key} xs={24} lg={12}>
					<Card
						onClick={() => onClick(info.url)}
						className={style.npm__card}
					>
						<Skeleton loading={isLoading}>
							<Space>
								<Title level={3}>
									{info.key}@{info.version}
								</Title>
							</Space>
							<Tag
								className={style.npm__card_tag}
								color="#2db7f5"
							>
								{info.new && "NEW"}
							</Tag>
						</Skeleton>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default PackageList;
