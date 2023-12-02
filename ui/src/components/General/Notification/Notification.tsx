import { FC, useEffect, useState } from "react";
import {
	NOTIFICATION_KEY,
	NOTIFICATION_RED_FLAG_KEY,
	NOTIFICATION_URL,
} from "./constants";
import { useGetNotifications } from "hooks";
import NotificationList from "./components/NotificationList";
import {
	getLocalstorageValue,
	setLocalstorageValue,
} from "utils/helper-functions/storage";
import { compareDate } from "./helper";

const Notification: FC = () => {
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
			isLoading={isLoading}
			isError={isError}
			showRedFlag={showRedFlag}
			handleRedFlagNotification={handleRedFlagNotification}
		/>
	);
};

export default Notification;
