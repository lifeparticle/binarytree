import React, { useState } from "react";
import { Drawer as AntDDrawer, Space } from "antd";
import Icon from "components/General/Icon";
import style from "./Drawer.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResponsiveButton } from "components/General/FormComponents";
import { BeamDetail } from "data/beamData";

interface DrawerProps {
	beamObject: BeamDetail[];
}

const Drawer: React.FC<DrawerProps> = ({ beamObject }) => {
	const [open, setOpen] = useState(false);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	if (beamObject.length === 0) return;

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const buildURL = (beam: BeamDetail) => {
		const url = beam.url;
		let params = "";

		beam.queryParams.forEach((queryParam, index, array) => {
			params += `${queryParam.map.to}=${encodeURIComponent(
				searchParams.get(queryParam.map.from) as string
			)}`;

			if (index !== array.length - 1) {
				params += "&";
			}
		});

		return `${url}?${params}`;
	};

	return (
		<div>
			<Space>
				<span className={style.beam} onClick={showDrawer}>
					<Icon name="ChevronRight" />
				</span>
			</Space>
			<AntDDrawer
				title="Tools"
				placement={"right"}
				width={300}
				onClose={onClose}
				open={open}
			>
				<Space direction="vertical" size={"middle"}>
					{beamObject.map((beam) => (
						<ResponsiveButton
							key={beam.name}
							onClick={() => {
								navigate(buildURL(beam));
								setOpen(false);
							}}
						>
							Open in {beam.name}
						</ResponsiveButton>
					))}
				</Space>
			</AntDDrawer>
		</div>
	);
};

export default Drawer;
