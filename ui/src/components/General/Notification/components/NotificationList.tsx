import style from "components/General/Notification/Notification.module.scss";
import { Button, Skeleton, Typography, Tag, Dropdown } from "antd";
import { Icon, Markdown } from "components/General";
import { classNames } from "utils/helper-functions/string";
import { FC } from "react";
const { Title } = Typography;

interface NotificationListProps {
	notifications: Markdown[] | undefined;
	showRedFlag: boolean;
	isLoading: boolean;
	isError: boolean;
	handleRedFlagNotification: () => void;
}

const NotificationList: FC<NotificationListProps> = ({
	notifications,
	isLoading,
	isError,
	handleRedFlagNotification,
	showRedFlag,
}) => {
	const renderNotificationItems = () => {
		if (isLoading) {
			return [
				{
					key: 1,
					label: <Skeleton active />,
				},
			];
		}

		if (isError) {
			return [
				{
					key: 1,
					label: (
						<div className={style.notification__error}>
							<Icon name="ShieldClose" color="red" />
							<p>Something went wrong!</p>
						</div>
					),
				},
			];
		}

		if (notifications?.length === 0) {
			return [
				{
					key: 1,
					label: (
						<div className={style.notification__empty}>
							No notifications available.
						</div>
					),
				},
			];
		}

		return notifications
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
	};

	return (
		<Dropdown
			menu={{ items: renderNotificationItems() }}
			placement="bottomRight"
			arrow={{ pointAtCenter: true }}
			overlayClassName={classNames(
				style.notification,
				"notification-container"
			)}
			onOpenChange={handleRedFlagNotification}
		>
			<Button
				aria-label="notification-icon"
				className={style.notification__button}
			>
				<span
					className={
						showRedFlag ? style.notification__button__status : ""
					}
				></span>
				<Icon name="Bell" size={20} />
			</Button>
		</Dropdown>
	);
};

export default NotificationList;
