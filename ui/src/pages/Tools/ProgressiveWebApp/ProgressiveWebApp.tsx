import { FC, useEffect, useState } from "react";
import styles from "./ProgressiveWebApp.module.scss";
import { CodeEditor, ResponsiveButton } from "components/General";
import { Card, Form, Typography } from "antd";
import { useFetch } from "hooks";
import { downloadJSONFile } from "utils/helper-functions/files";
const { Text } = Typography;

const URL = `./pwa.json`;
const QUERY_KEY = "pwa";

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
		downloadJSONFile(JSON.stringify(manifest, null, 4), "manifest.json");
	};

	return (
		<div className={styles.pwa}>
			<p>
				A Progressive Web App (PWA) is a software application developed
				using web-based technologies. It offers a user experience
				similar to that of an app specific to a platform. Much like a
				website, a PWA has the advantage of operating across various
				platforms and devices utilizing a single codebase. However, akin
				to an app designed for a specific platform, it can be downloaded
				onto a device, function offline or in the background, and
				seamlessly interact with the device and other installed
				applications.
			</p>
			<h2>1. INSTALLABLE</h2>
			<ul>
				<li>
					<a
						href="https://developer.chrome.com/docs/lighthouse/pwa/installable-manifest/"
						target="_blank"
						rel="noopener noreferrer"
					>
						A PWA can be installed on a device, just like a native
						app. It can be added to the home screen, dock, or
						taskbar, and can be launched with a single click, just
						like a native app.
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
							{'<link rel="manifest" href="/manifest.json" />'}
						</Text>
					</Card>
				</li>
			</ul>
			<h2>2. PWA OPTIMIZED</h2>
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
		</div>
	);
};

export default ProgressiveWebApp;
