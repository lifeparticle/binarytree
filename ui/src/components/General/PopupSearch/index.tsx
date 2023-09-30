import { Input, InputRef, Modal } from "antd";
import { MENU_ITEMS } from "components/Layouts/Menu/utils/constants";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./PopSearch.module.scss";
import Icon from "components/General/Icon";
import { IconName } from "components/General/Icon/utils/types";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import { classNames } from "lib/utils/helper";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { SearchModalContext } from "lib/utils/context/SearchModalProvider";

const { Search } = Input;
const items = MENU_ITEMS.map((item) => item.children).flat();

const PopupSearch: React.FC = () => {
	const navigate = useNavigate();
	const { isDarkMode } = useContext(DarkModeContext);
	const { handleModalOpen, isModalOpen } = useContext(SearchModalContext);
	const [input, setInput] = useState<string>("");
	const [filteredItems, setFilteredItems] = useState(items);

	const searchInputRef = useRef<InputRef | null>(null);

	const handleClick = (url: string) => {
		navigate(url);
		handleModalOpen();
	};

	const handleAfterOpen = () => {
		if (searchInputRef.current) {
			searchInputRef.current.focus();
		}
	};

	useEffect(() => {
		setFilteredItems(
			items.filter((item) =>
				item.name.toLowerCase().includes(input.toLowerCase())
			)
		);
	}, [input]);

	useCombinedKeyPress(handleModalOpen, "KeyK");

	return (
		<Modal
			onCancel={handleModalOpen}
			title="Features"
			open={isModalOpen}
			footer={[]}
			afterOpenChange={handleAfterOpen}
			className={isDarkMode ? "dark" : "light"}
		>
			<Search
				placeholder="What do you need?"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				ref={searchInputRef}
				allowClear
				autoFocus
				onPressEnter={() => {
					filteredItems.length > 0 &&
						handleClick(filteredItems[0].url);
				}}
			/>
			<div
				className={classNames(
					style.popsearch__container,
					"search_container"
				)}
			>
				{filteredItems.map((item) => (
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
