import { Card, Col, Skeleton, Space, Tag, Typography } from "antd";
import { FC } from "react";
import { Package as PackagType } from "pages/Information/Npmpackages/types";
const { Title } = Typography;
import style from "pages/Information/Npmpackages/Npmpackages.module.scss";

interface PackageProps {
	resource: PackagType;
}

const Package: FC<PackageProps> = (props) => {
	const onClick = (url: string) => {
		window.open(url, "_blank", "noopener");
	};

	const { version, new: status, url, key } = props.resource;

	return (
		<Col xs={24} lg={12}>
			<Card onClick={() => onClick(url)}>
				<Skeleton loading={false}>
					<Space>
						<Title level={3}>
							{key}@{version}
						</Title>
					</Space>
					{status && (
						<Tag className={style.npm__card_tag} color="#2db7f5">
							NEW
						</Tag>
					)}
				</Skeleton>
			</Card>
		</Col>
	);
};

export default Package;
