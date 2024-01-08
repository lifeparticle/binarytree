import { FC, useEffect, useState } from "react";
import styles from "./ProgressiveWebApp.module.scss";
import { CodeEditor, ResponsiveButton } from "components/General";
import { Card, Form, Typography } from "antd";
import { useFetch } from "hooks";
import { downloadJSONFile } from "utils/helper-functions/files";
const { Text } = Typography;

const URL = `./pwa.json`;
const QUERY_KEY = "pwa";
const OUTPUT_FILE_NAME = "manifest.json";

const ProgressiveWebApp: FC = () => {
	const [manifest, setManifest] = useState({});

	const { data, isLoading, isError } = useFetch(QUERY_KEY, URL);

	useEffect(() => {
		if (isLoading) {
			setManifest("Loading...");
		}
	}, [isLoading]);

	useEffect(() => {
		if (data && !isError) {
			setManifest(data);
		}
	}, [data, isError]);

	const handleCodeChange = (newCode?: string) => {
		if (!newCode) return;
		try {
			const parsedCode = JSON.parse(newCode);
			setManifest(parsedCode);
		} catch (e) {
			console.log(e);
		}
	};

	const handleDownload = () => {
		downloadJSONFile(JSON.stringify(manifest, null, 4), OUTPUT_FILE_NAME);
	};

	return (
		<div className={styles.pwa}>
			<Text>1. INSTALLABLE</Text>
			<Typography.Paragraph>
				<ul>
					<li>
						<a
							href="https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/"
							target="_blank"
							rel="noopener noreferrer"
						>
							A PWA can be installed on a device, just like a
							native app. It can be added to the home screen,
							dock, or taskbar, and can be launched with a single
							click, just like a native app.
						</a>
						<Card>
							<Form layout="vertical">
								<CodeEditor
									label="Text"
									value={JSON.stringify(manifest, null, 4)}
									language="json"
									handleCode={handleCodeChange}
								/>
								<ResponsiveButton onClick={handleDownload}>
									Download JSON
								</ResponsiveButton>
							</Form>
							Add the following code to your index.html file:
							<Text keyboard>
								{
									'<link rel="manifest" href="/manifest.json" />'
								}
							</Text>
						</Card>
					</li>
				</ul>
			</Typography.Paragraph>
			<Text>2. PWA OPTIMIZED</Text>
			<Typography.Paragraph>
				<ul>
					<li>
						<a
							href="https://developer.chrome.com/docs/lighthouse/pwa/splash-screen"
							target="_blank"
							rel="noopener noreferrer"
						>
							Custom splash screen
						</a>
					</li>
					<li>
						<a
							href="https://developer.chrome.com/docs/lighthouse/pwa/themed-omnibox"
							target="_blank"
							rel="noopener noreferrer"
						>
							Theme color
						</a>
					</li>
					<li>
						<a
							href="https://developer.chrome.com/docs/lighthouse/pwa/content-width"
							target="_blank"
							rel="noopener noreferrer"
						>
							Content size
						</a>
					</li>
					<li>
						<a
							href="https://developer.chrome.com/docs/lighthouse/pwa/viewport"
							target="_blank"
							rel="noopener noreferrer"
						>
							Viewport meta tag
						</a>
					</li>
					<li>
						<a
							href="https://developer.chrome.com/docs/lighthouse/pwa/maskable-icon-audit"
							target="_blank"
							rel="noopener noreferrer"
						>
							Maskable icon
						</a>
					</li>
				</ul>
			</Typography.Paragraph>
		</div>
	);
};

export default ProgressiveWebApp;
