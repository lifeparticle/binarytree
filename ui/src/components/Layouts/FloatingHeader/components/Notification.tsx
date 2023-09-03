import React from "react";
import {
	NOTIFICATION_KEY,
	NOTIFICATION_URL,
} from "components/Layouts/FloatingHeader/utils/constants";
import useGetNotifications from "lib/utils/hooks/useGetNotifications";
import NotificationList from "./NotificationList";
import { NotificationPropsType } from "../utils/types";

const Notification: React.FC<NotificationPropsType> = ({ colorText }) => {
	const { notifications, isLoading, isError } = useGetNotifications(
		NOTIFICATION_KEY,
		NOTIFICATION_URL
	);

	return (
		<NotificationList
			notifications={notifications}
			colorText={colorText}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default Notification;
