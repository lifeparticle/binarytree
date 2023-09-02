import React, { useState, useEffect } from "react";
import style from "./Notification.module.scss";
import { Markdown } from "components/Layouts/FloatingHeader/utils/types";
import { parsedMarkdown } from "components/Layouts/FloatingHeader/utils/helper";
import { DEFAULT_RECORD } from "components/Layouts/FloatingHeader/utils/constants";
import { Typography, Tag } from "antd";

const { Title } = Typography;

const Notification: React.FC = () => {
	const [notifications, setNotifications] = useState<Markdown[]>([]);

	useEffect(() => {
		async function fetchChangelog() {
			try {
				const response = await fetch("/CHANGELOG.md");
				const content = await response.text();

				const entries = parsedMarkdown(content);

				setNotifications(entries);
			} catch (error) {
				console.error("Error fetching changelog:", error);
			}
		}

		if (import.meta.env.MODE === "development") {
			setNotifications(DEFAULT_RECORD);
		} else {
			fetchChangelog();
		}
	}, []);

	return (
		<div className={style.notification}>
			{notifications.map((notification) => (
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
			))}
		</div>
	);
};

export default Notification;
