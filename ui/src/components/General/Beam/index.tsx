import React, { useState } from "react";
import { Drawer, Space } from "antd";
import Icon from "components/General/Icon";
import style from "./Beam.module.scss";

interface BeamProps {
	children: React.ReactNode;
}

const Beam: React.FC<BeamProps> = ({ children }) => {
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
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
				{children}
			</Drawer>
		</div>
	);
};

export default Beam;
