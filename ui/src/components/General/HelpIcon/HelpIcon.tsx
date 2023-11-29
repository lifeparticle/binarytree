import React, { useState } from "react";
import { Button, Modal } from "antd";
import Help from "./components/Help";
import { HelpEntry } from "data/helpData";
import { Icon } from "components/General";

interface HelpIconProps {
	helpObject: HelpEntry;
}

const HelpIcon: React.FC<HelpIconProps> = ({ helpObject }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Button
				size="small"
				key="Github"
				type="default"
				shape="circle"
				icon={<Icon name="Info" size={15} />}
				onClick={showModal}
				aria-label="helpicon"
			/>
			<Modal
				title="Help"
				open={isModalOpen}
				footer={null}
				keyboard={true}
				maskClosable={true}
				onCancel={closeModal}
			>
				<Help helpObject={helpObject} />
			</Modal>
		</>
	);
};

export default HelpIcon;
