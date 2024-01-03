import fse from "fs-extra";
import path from "path";

try {
	const urlPath = new URL(import.meta.url).pathname;
	// Correcting the path for Windows environment
	const topDir = path.resolve(
		process.platform === "win32" ? urlPath.substring(1) : urlPath
	);

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
