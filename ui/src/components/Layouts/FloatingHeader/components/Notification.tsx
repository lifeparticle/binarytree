import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import React, { useState, useEffect, useContext } from "react";
import style from "./Notification.module.scss";
import { classNames } from "lib/utils/helper";
import { markdownType } from "../utils/types";
import { parsedMarkdown } from "../utils/utils";
import { DEFAULT_RECORD } from "../utils/constants";
import { Tag } from "antd";

const Notification: React.FC = () => {
	const { isDarkMode } = useContext(DarkModeContext);
	const [records, setRecords] = useState<markdownType[]>([]);

	useEffect(() => {
		async function fetchChangelog() {
			try {
				const response = await fetch("/CHANGELOG.md");
				const content = await response.text();

				const entries = parsedMarkdown(content);

				setRecords(entries);
			} catch (error) {
				console.error("Error fetching changelog:", error);
			}
		}

		if (import.meta.env.MODE === "development") {
			setRecords(DEFAULT_RECORD);
		} else {
			fetchChangelog();
		}
	}, []);

	return (
		<div
			className={classNames("notification-dropdown", style.notification)}
			style={{ color: isDarkMode ? "white" : "" }}
		>
			{records.map((record) => (
				<div key={record.date}>
					<h3>{record.version}</h3>
					<Tag color="green">{record.date}</Tag>
					<div>
						{record.features.map((feature) => (
							<div key={feature}>{feature}</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Notification;
