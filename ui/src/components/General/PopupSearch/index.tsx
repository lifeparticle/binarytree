import { Input, Modal } from "antd";
import { MENU_ITEMS } from "components/Layouts/Menu/utils/constants";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./PopSearch.module.scss";
import Icon from "components/General/Icon";
import { IconName } from "components/General/Icon/utils/types";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";

const { Search } = Input;
const items = MENU_ITEMS.map((item) => item.children).flat();

const PopupSearch: React.FC = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState<string>("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleClick = (url: string) => {
		navigate(url);
		setIsModalOpen(false);
	};

	useCombinedKeyPress(
		() => setIsModalOpen((open) => !open),
		["ControlLeft", "KeyK"]
	);

	return (
		<Modal
			onCancel={handleCancel}
			title="Features"
			open={isModalOpen}
			footer={[]}
		>
			<Search
				placeholder="What do you need?"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				allowClear
			/>
			<div className={style.popsearch__container}>
				{items
					.filter((item) =>
						item.name.toLowerCase().includes(input.toLowerCase())
					)
					.map((item) => (
						<div
							key={item.url}
							className={style.popsearch__container_item}
							onClick={() => handleClick(item.url)}
						>
							<Icon name={item.icon as IconName} />
							<p>{item?.name}</p>
						</div>
					))}
			</div>
		</Modal>
	);
};

export default PopupSearch;
