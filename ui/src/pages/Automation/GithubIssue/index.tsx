import { Button, Card, Form, Progress, Steps, Upload } from "antd";
import { ResponsiveInputWithLabel } from "components/General/FormComponents";
import InputGrid from "components/Layouts/InputGrid";
import PageGrid from "components/Layouts/PageGrid";
import React, { useState } from "react";
import Papa from "papaparse";
import CsvTable from "./components/CsvTable";
import { CSVLink } from "react-csv";
import { calculateSteps, createGitHubIssue } from "./utils/helper";
import { steps } from "./utils/constants";
import { IssueType, SavedIssueType } from "./types";
import ErrorComponent from "components/General/ErrorComponent";

const GithubIssue: React.FC = () => {
	//? input state
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
				const formatData = responseIssue.map((issue) => {
					const formattedIssue: IssueType = {} as IssueType;
					for (const key in issue) {
						if (Object.prototype.hasOwnProperty.call(issue, key)) {
							// ts-ignore
							formattedIssue[key.toLowerCase()] = issue[key];
						}
					}
					return formattedIssue;
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
						placeholder="enter your github token"
						value={token}
						onChange={(e) => setToken(e.target.value)}
						min={0}
						type="text"
					/>

					<InputGrid>
						<ResponsiveInputWithLabel
							label="Owner"
							placeholder="owner"
							value={owner}
							onChange={(e) => setOwner(e.target.value)}
							min={0}
							type="text"
						/>

						<ResponsiveInputWithLabel
							label="Repositories"
							placeholder="repository name"
							value={repo}
							onChange={(e) => setRepo(e.target.value)}
							min={0}
							type="text"
						/>
					</InputGrid>

					<InputGrid>
						<Form.Item>
							<Upload
								beforeUpload={handleUpload}
								listType="picture"
							>
								<Button disabled={!haveConfig}>
									Upload csv
								</Button>
							</Upload>
						</Form.Item>
						<Button
							disabled={fileData.length === 0 && !isValidInput}
							block
							onClick={handleCreateGitHubIssue}
						>
							Create {fileData?.length} issue
						</Button>
					</InputGrid>
				</Form>

				<CsvTable data={fileData} />
			</Card>

			<Card title="Saved Issue" style={{ height: "100%" }}>
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
				<CSVLink data={savedIssues} filename={"csv_data.csv"}>
					<Button disabled={savedIssues.length === 0}>
						Download CSV
					</Button>
				</CSVLink>
			</Card>
		</PageGrid>
	);
};

export default GithubIssue;
