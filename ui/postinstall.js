import fse from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

try {
	// Convert URL to file path and get the directory name
	const __filename = fileURLToPath(import.meta.url);
	const topDir = path.dirname(__filename);

	const sourceDir = path.join(topDir, "node_modules", "tinymce");
	const destDir = path.join(topDir, "public", "tinymce");

	// Empty the destination directory
	fse.emptyDirSync(destDir);

	// Copy files from source to destination
	fse.copySync(sourceDir, destDir, { overwrite: true });

	console.log("Copy operation completed successfully.");
} catch (error) {
	console.error("Error during file operation:", error);
}
