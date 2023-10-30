import { useState } from "react";
import { fetchFile } from "@ffmpeg/util";
import { Button, message, Upload } from "antd";
import Icon from "components/General/Icon";
import type { UploadFile, UploadProps } from "antd";
import {
	ResponsiveButton,
	ResponsiveSelectWithLabel,
} from "components/General/FormComponents";
import styles from "./FileConverter.module.scss";
import { useFfmpeg } from "./useFfmpeg";
import {
	getFileExtension,
	removeFileExtension,
} from "utils/helper-functions/files";

const { Dragger } = Upload;

const IMAGE_TYPES = [
	{ label: "PNG", value: ".png" },
	{ label: "JPEG", value: ".jpeg" },
	{ label: "SVG", value: ".svg" },
	{ label: "WEBP", value: ".webp" },
];

interface FileConverter {
	file: UploadFile;
	from: string;
	to: string;
}

function FileConverter() {
	const [uploadFiles, setUploadedFiles] = useState<FileConverter[]>([]);
	const [selectedFormat, setSelectedFormat] = useState(IMAGE_TYPES[0].value);
	const { loaded, ffmpegRef } = useFfmpeg();

	const transcode = async (fileConverter: FileConverter) => {
		const ffmpeg = ffmpegRef.current;
		const outputFileName = `${removeFileExtension(
			fileConverter.file.name
		)}${fileConverter.to}`;

		await ffmpeg.writeFile(
			fileConverter.file.name,
			await fetchFile(fileConverter.file.originFileObj)
		);
		await ffmpeg.exec(["-i", fileConverter.file.name, outputFileName]);
		const fileData = await ffmpeg.readFile(outputFileName);
		const data = new Uint8Array(fileData as ArrayBuffer);

		const blob = new Blob([data.buffer], {
			type: `${fileConverter.file.type}/${fileConverter.to}`,
		});
		const url = URL.createObjectURL(blob);
		return [url, outputFileName];
	};

	const convertFiles = async () => {
		const convertedFilesPromises = uploadFiles.map(transcode);
		const convertedFiles = await Promise.all(convertedFilesPromises);
		convertedFiles.forEach(([url, fileName]) =>
			downloadFiles(url, fileName)
		);
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
			if (status !== "uploading") {
				// console.log(info.file, info.fileList);
			}
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
						to: selectedFormat,
					},
				]);
			} else if (status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		accept: "image/*,video/*,audio/*",
		itemRender: (
			_,
			file: UploadFile,
			__,
			actions: {
				download: (file: UploadFile) => void;
				preview: (file: UploadFile) => void;
				remove: (file: UploadFile) => void;
			}
		) => {
			return (
				<div className={styles.ic__item}>
					<h5>{file.name}</h5>
					<div className={styles.ic__item_right}>
						<ResponsiveSelectWithLabel
							label="Convert file to:"
							value={selectedFormat}
							options={IMAGE_TYPES}
							onSelect={(_, info) => {
								setSelectedFormat(info.value);
							}}
						/>
						<Button
							icon={<Icon name="Trash" />}
							onClick={() => actions.remove(file)}
						/>
					</div>
				</div>
			);
		},
	};

	return (
		<div className={styles.ic}>
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
			<ResponsiveButton
				type="primary"
				onClick={convertFiles}
				disabled={!loaded}
			>
				{uploadFiles.length > 1 ? "Convert All" : "Convert"}
			</ResponsiveButton>
		</div>
	);
}

export default FileConverter;
