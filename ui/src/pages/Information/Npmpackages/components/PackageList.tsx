import React from "react";
import { Row } from "antd";
import { PackageListProps } from "pages/Information/Npmpackages/utils/types";
import style from "pages/Information/Npmpackages/Npmpackages.module.scss";
import Package from "./Package";
import PackageSkeleton from "./PackageSkeleton";

const PackageList: React.FC<PackageListProps> = ({ packages, isLoading }) => {
	const LoadingComponent = [...Array(4).keys()].map((x) => (
		<PackageSkeleton key={x} />
	));

	const ListComponent = packages?.map((info) => (
		<Package key={info.key} resource={info} />
	));
	return (
		<Row gutter={[16, 16]} className={style.npm}>
			{isLoading ? LoadingComponent : ListComponent}
		</Row>
	);
};

export default PackageList;
