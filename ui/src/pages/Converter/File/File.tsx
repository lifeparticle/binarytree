import { useState } from "react";
import { fetchFile } from "@ffmpeg/util";
import { message, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import {
	Icon,
	ResponsiveButton,
	ResponsiveSelectWithLabel,
	Spin,
} from "components/General";
import styles from "./FileConverter.module.scss";
import {
	getFileExtension,
	removeFileExtension,
} from "utils/helper-functions/files";
import { IMAGE_TYPES } from "./constants";
import { useFfmpeg } from "./useFfmpeg";

const { Dragger } = Upload;
interface FileConverter {
	file: UploadFile;
	from: string;
}

function FileConverter() {
	const [uploadedFiles, setUploadedFiles] = useState<FileConverter[]>([]);

	const [selectedFormat, setSelectedFormat] = useState(IMAGE_TYPES[0].value);
	const { loaded, ffmpeg } = useFfmpeg();

	const transcode = async (fileConverter: FileConverter) => {
		const outputFileName = `${removeFileExtension(
			fileConverter.file.name
		)}${selectedFormat}`;

		await ffmpeg.writeFile(
			fileConverter.file.name,
			await fetchFile(fileConverter.file.originFileObj)
		);
		await ffmpeg.exec(["-i", fileConverter.file.name, outputFileName]);
		const fileData = await ffmpeg.readFile(outputFileName);
		const data = new Uint8Array(fileData as ArrayBuffer);

		const blob = new Blob([data.buffer], {
			type: `${fileConverter.file.type}/${selectedFormat}`,
		});
		const url = URL.createObjectURL(blob);
		return [url, outputFileName];
	};

	const convertFiles = async () => {
		const convertedFilesPromises = uploadedFiles.map(transcode);
		const convertedFiles = await Promise.all(convertedFilesPromises);

		for (const [url, fileName] of convertedFiles) {
			await downloadFiles(url, fileName);
		}
	};

	const downloadFiles = async (url: string, fileName: string) => {
		const a = document.createElement("a");
		a.download = fileName;
		a.href = url;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

	const props: UploadProps = {
		name: "file",
		multiple: true,
		customRequest: (options) => {
			if (options.onSuccess) {
				options.onSuccess({}, new XMLHttpRequest());
			}
		},
		onChange(info) {
			const { status } = info.file;
			if (status === "done") {
				message.success(
					`${info.file.name} file uploaded successfully.`
				);

				let fileExtension = "";
				try {
					fileExtension = getFileExtension(info.file.name);
				} catch (e) {
					console.log("e", e);
				}

				if (fileExtension === "") return;
				setUploadedFiles((prevFiles) => [
					...prevFiles,
					{
						file: info.file,
						from: fileExtension,
					},
				]);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		accept: "image/*,video/*,audio/*",
		disabled: !loaded,
		listType: "picture",
	};

	return (
		<div className={styles.ic}>
			{!loaded && <Spin />}

			<Dragger {...props}>
				<p className="ant-upload-drag-icon">
					<Icon name="Inbox" size={100} strokeWidth="0.2" />
				</p>
				<p className="ant-upload-text">
					Click or drag file to this area to upload
				</p>
				<p className="ant-upload-hint">
					Support for a single or bulk upload.
				</p>
			</Dragger>
			<ResponsiveSelectWithLabel
				label="Output file format"
				value={selectedFormat}
				onSelect={(_, option) => setSelectedFormat(option.value)}
				options={IMAGE_TYPES}
				defaultActiveFirstOption
				disabled={!loaded}
			/>
			<ResponsiveButton
				type="primary"
				onClick={convertFiles}
				disabled={!loaded}
				icon
			>
				{uploadedFiles.length > 1 ? "Convert All" : "Convert"}
			</ResponsiveButton>
		</div>
	);
}

export default FileConverter;
