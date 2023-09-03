import style from "./Notification.module.scss";
import { Button, MenuProps } from "antd";
import { compareDate } from "components/Layouts/FloatingHeader/utils/helper";
import { Typography, Tag, Dropdown } from "antd";
import Icon from "components/General/Icon";
import {
	classNames,
	getLocalstorageValue,
	setLocalstorageValue,
} from "lib/utils/helper";
import { NotificationListPropsType } from "../utils/types";
import { useEffect, useState } from "react";
import { NOTIFICATION_RED_FLAG_KEY } from "../utils/constants";
const { Title } = Typography;

const NotificationList: React.FC<NotificationListPropsType> = ({
	notifications,
	colorText,
	isLoading,
	isError,
}) => {
	const localeStorageDate = getLocalstorageValue<string>(
		NOTIFICATION_RED_FLAG_KEY
	);
	const [showRedFlag, setShowRedFlag] = useState(false);

	const handleNotification = () => {
		if (notifications) {
			setLocalstorageValue(
				NOTIFICATION_RED_FLAG_KEY,
				notifications[0].date
			);
			setShowRedFlag(false);
		}
	};

	const NotificationItems: MenuProps["items"] = notifications
		?.map((notification, index) => [
			{
				key: `item_${index}`,
				label: (
					<div
						key={notification.date}
						className={style.notification__item}
					>
						<div className={style.notification__item_title}>
							<Title level={5}>{notification.date}</Title>
							<Tag color="green">{notification.version}</Tag>
						</div>
						<ul className={style.notification__item_features}>
							{notification.features.map((feature) => (
								<li
									key={feature}
									className={
										style.notification__item_features_feature
									}
								>
									{feature}
								</li>
							))}
						</ul>
					</div>
				),
			},
			{
				type: "divider",
				key: `divider_${index}`,
			},
		])
		.flat();

	useEffect(() => {
		if (notifications) {
			setShowRedFlag(
				compareDate(notifications[0].date, localeStorageDate)
			);
		}
	}, [notifications, localeStorageDate]);

	if (isLoading || isError || notifications?.length === 0) return null;

	return (
		<Dropdown
			menu={{ items: NotificationItems }}
			placement="bottomRight"
			arrow={{ pointAtCenter: true }}
			overlayClassName={classNames(
				style.notification,
				"notification-container"
			)}
			onOpenChange={handleNotification}
		>
			<Button className={style.notification__button}>
				<span
					className={
						showRedFlag ? style.notification__button__status : ""
					}
				></span>
				<Icon name="Bell" size={20} color={colorText} />
			</Button>
		</Dropdown>
	);
};

export default NotificationList;
