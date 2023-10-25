import React, { useState } from "react";
import { Drawer, Space } from "antd";
import Icon from "components/General/Icon";
import style from "./Beam.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResponsiveButton } from "../FormComponents";
import { BeamDetail } from "components/Hoc/withPageTitle/utils/constants";

interface BeamProps {
	beamObject: BeamDetail[];
}

const Beam: React.FC<BeamProps> = ({ beamObject }) => {
	const [open, setOpen] = useState(false);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	if (beamObject.length === 0) return null;

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	const buildURL = (beam: BeamDetail) => {
		const url = beam.url;
		let params = "";

		if (beam.queryParams) {
			beam.queryParams.forEach((queryParam, index, array) => {
				params += `${queryParam.map.to}=${encodeURIComponent(
					searchParams.get(queryParam.map.from) as string
				)}`;

				if (index !== array.length - 1) {
					params += "&";
				}
			});
		}

		console.log(`${url}?${params}`);

		return `${url}?${params}`;
	};

	return (
		<div>
			<Space>
				<span className={style.beam} onClick={showDrawer}>
					<Icon name="ChevronRight" />
				</span>
			</Space>
			<Drawer
				title="Navigate related routes"
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
			</Drawer>
		</div>
	);
};

export default Beam;
