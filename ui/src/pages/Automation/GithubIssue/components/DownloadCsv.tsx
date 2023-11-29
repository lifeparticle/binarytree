import React from "react";
import { SavedIssueType } from "pages/Automation/GithubIssue";
import { Button } from "antd";
import { saveAs } from "file-saver";
import { generateCsvData } from "pages/Automation/GithubIssue/helper";

interface DownloadCsvProps {
	savedIssues: SavedIssueType[];
}

const DownloadCsv: React.FC<DownloadCsvProps> = ({ savedIssues }) => {
	const downloadCSV = () => {
		const csvContent = generateCsvData(savedIssues);

		const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
		saveAs(blob, "data.csv");
	};
	return (
		<Button disabled={savedIssues.length === 0} onClick={downloadCSV}>
			Download CSV
		</Button>
	);
};

export default DownloadCsv;
