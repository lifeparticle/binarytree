import { Button, Card, Form, Progress, Steps, Upload } from "antd";
import { ErrorComponent, ResponsiveInputWithLabel } from "components/General";
import { InputGrid, PageGrid } from "components/Layouts";
import { FC, useState } from "react";
import Papa from "papaparse";
import CsvTable from "./components/CsvTable";
import { calculateSteps, createGitHubIssue } from "./helper";
import DownloadCsv from "./components/DownloadCsv";
import style from "./GithubIssue.module.scss";
import { useOnlineStatus } from "hooks";

const steps = [
	{
		title: "Config",
	},
	{
		title: "File uploaded",
	},
	{
		title: "CSV file validation",
	},
];

export interface IssueType {
	title?: string;
	body?: string;
	assignee?: string | null;
	assignees?: string[];
	milestone?: null | string | number;
	labels?: string[];
}

export interface SavedIssueType {
	url: string;
	title: string;
}

const GithubIssue: FC = () => {
	//? input state
	const isOnline = useOnlineStatus();
	const [owner, setOwner] = useState("");
	const [repo, setRepo] = useState("");
	const [token, setToken] = useState("");
	const [fileData, setFileData] = useState<IssueType[]>([]);
	const [isValidInput, setIsValidInput] = useState(false);

	// ? output state
	const [progress, setProgress] = useState(0);
	const [isError, setIsError] = useState(false);
	const [savedIssues, setSavedIssues] = useState<SavedIssueType[]>([]);

	const handleUpload = (file: File) => {
		Papa.parse<IssueType[]>(file, {
			complete: (result) => {
				const responseIssue = result.data;

				// Convert keys to lowercase for each object in the array
				const formatData: IssueType[] = responseIssue.map((issue) => {
					const newObj = Object.fromEntries(
						Object.entries(issue).map(([k, v]) => [
							k.toLowerCase(),
							v,
						])
					);
					return newObj;
				});

				const checkValidity = formatData.every((dt) => dt?.title);
				setIsValidInput(checkValidity);
				setFileData(formatData);
			},
			header: true,
			skipEmptyLines: true,
		});
	};

	const handleCreateGitHubIssue = () => {
		createGitHubIssue(
			owner,
			repo,
			token,
			fileData,
			setProgress,
			setSavedIssues,
			setIsError
		);
	};

	const haveConfig = repo.length > 0 && token.length > 0 && owner.length > 0;
	const haveFileData = fileData.length > 0;

	return (
		<PageGrid>
			<Card>
				<Steps
					current={calculateSteps(
						haveConfig,
						haveFileData,
						isValidInput
					)}
					items={steps}
				/>
				<br />
				{!isValidInput && fileData.length > 0 && (
					<>
						<ErrorComponent
							category="Validation Error"
							reasons={["CSV files must contain a title."]}
							solutions={["Plase add a title in your CSV"]}
						/>
						<br />
					</>
				)}
				<Form layout="vertical">
					<ResponsiveInputWithLabel
						label="Github token"
						placeholder="Enter your GitHub token"
						value={token}
						onChange={(e) => setToken(e.target.value)}
						min={0}
						type="text"
					/>

					<InputGrid>
						<ResponsiveInputWithLabel
							label="Owner"
							placeholder="Owner"
							value={owner}
							onChange={(e) => setOwner(e.target.value)}
							min={0}
							type="text"
						/>

						<ResponsiveInputWithLabel
							label="Repositories"
							placeholder="Repository name"
							value={repo}
							onChange={(e) => setRepo(e.target.value)}
							min={0}
							type="text"
						/>
					</InputGrid>

					<InputGrid>
						<Form.Item>
							<Upload
								customRequest={({ onSuccess }) => {
									onSuccess?.("OK");
								}}
								beforeUpload={handleUpload}
								listType="picture"
							>
								<Button disabled={!haveConfig}>
									Upload csv
								</Button>
							</Upload>
						</Form.Item>
						<Button
							disabled={
								!isOnline ||
								(fileData.length === 0 && !isValidInput)
							}
							block
							onClick={handleCreateGitHubIssue}
						>
							{isOnline
								? `Create ${fileData?.length} issue`
								: `Connecting...`}
						</Button>
					</InputGrid>
				</Form>
				<br />

				<CsvTable data={fileData} />
			</Card>

			<Card title="Saved Issue" className={style.gi}>
				{isError && (
					<>
						<ErrorComponent
							category="Configuration Error"
							reasons={[
								"Invalid github token/handle/repo name",
								"Network Issue",
								"Invalid github repositories name",
							]}
							solutions={[
								"Please provide valid github token/handle/repo name",
								"Try again with your stable connection",
							]}
						/>
						<br />
					</>
				)}

				{progress > 0 && <Progress percent={progress} size="small" />}

				<CsvTable data={savedIssues} />
				<br />

				<DownloadCsv savedIssues={savedIssues} />
			</Card>
		</PageGrid>
	);
};

export default GithubIssue;
