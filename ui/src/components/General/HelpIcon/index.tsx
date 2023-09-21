import React, { useState } from "react";
import { Button, Modal } from "antd";
import Icon from "components/General/Icon";
import Help from "./components/Help";

const HelpIcon: React.FC<{ helpText: string }> = ({ helpText }) => {
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
			/>
			<Modal
				title="Help"
				open={isModalOpen}
				footer={null}
				keyboard={true}
				maskClosable={true}
				onCancel={closeModal}
			>
				<Help text={helpText} />
			</Modal>
		</>
	);
};

export default HelpIcon;
