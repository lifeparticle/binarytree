import { danger, warn } from "danger";

const hasChangelog = danger.git.modified_files.includes("changelog.md");

if (!hasChangelog) {
	warn("You have not included a CHANGELOG entry.");
}
