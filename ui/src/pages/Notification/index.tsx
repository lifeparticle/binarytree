import { Card } from "antd";
import PageGrid from "components/Layouts/PageGrid";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";
import { marked } from "marked";
import React, { useState, useEffect, useContext } from "react";
import style from "./Notification.module.scss";

const ChangelogComponent: React.FC = () => {
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
		<PageGrid>
			<Card>
				<div
					className={style.notification}
					style={{ color: isDarkMode ? "white" : "red" }}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</Card>
		</PageGrid>
	);
};

export default ChangelogComponent;
