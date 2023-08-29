import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { marked } from "marked";
import React, { useState, useEffect, useContext } from "react";
import style from "./Notification.module.scss";
import { classNames } from "lib/utils/helper";

const Notification: React.FC = () => {
	const { isDarkMode } = useContext(DarkModeContext);
	const [html, setHtml] = useState("");

	useEffect(() => {
		async function fetchChangelog() {
			const response = await fetch("/changelog.md");
			const content = await response.text();

			setHtml(marked(content));
		}

		fetchChangelog();
	}, []);

	return (
		<div
			className={classNames("notification-dropdown", style.notification)}
			style={{ color: isDarkMode ? "white" : "" }}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	);
};

export default Notification;
