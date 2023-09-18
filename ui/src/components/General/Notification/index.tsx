import React, { useEffect, useState } from "react";
import {
	NOTIFICATION_KEY,
	NOTIFICATION_RED_FLAG_KEY,
	NOTIFICATION_URL,
} from "./utils/constants";
import useGetNotifications from "lib/utils/hooks/useGetNotifications";
import NotificationList from "./components/NotificationList";
import { NotificationProps } from "./utils/types";
import { getLocalstorageValue, setLocalstorageValue } from "lib/utils/helper";
import { compareDate } from "./utils/helper";

const Notification: React.FC<NotificationProps> = ({ colorText }) => {
	const { notifications, isLoading, isError } = useGetNotifications(
		NOTIFICATION_KEY,
		NOTIFICATION_URL
	);

	const localeStorageDate = getLocalstorageValue<string>(
		NOTIFICATION_RED_FLAG_KEY
	);

	const [showRedFlag, setShowRedFlag] = useState(false);

	const handleRedFlagNotification = () => {
		if (notifications) {
			setLocalstorageValue(
				NOTIFICATION_RED_FLAG_KEY,
				notifications[0].date
			);
			setShowRedFlag(false);
		}
	};

	useEffect(() => {
		if (notifications) {
			setShowRedFlag(
				compareDate(notifications[0].date, localeStorageDate)
			);
		}
	}, [notifications, localeStorageDate]);

	return (
		<NotificationList
			notifications={notifications}
			colorText={colorText}
			isLoading={isLoading}
			isError={isError}
			showRedFlag={showRedFlag}
			handleRedFlagNotification={handleRedFlagNotification}
		/>
	);
};

export default Notification;
