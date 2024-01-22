import { FC } from "react";
import { Row } from "antd";
import style from "pages/Information/Npmpackages/Npmpackages.module.scss";
import Package from "pages/Information/Npmpackages/components/Package";
import PackageSkeleton from "pages/Information/Npmpackages/components/PackageSkeleton";
import { PackageListProps } from "pages/Information/Npmpackages/types";

const PackageList: FC<PackageListProps> = ({ packages, isLoading }) => {
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
