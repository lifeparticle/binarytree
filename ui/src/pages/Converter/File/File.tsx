import { useState } from "react";

import { message, Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import {
	Icon,
	ResponsiveButton,
	ResponsiveSelectWithLabel,
	Spin,
} from "components/General";
import styles from "./FileConverter.module.scss";
import { convertFiles, getFileExtension } from "utils/helper-functions/files";
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
		onRemove: (file) => {
			const newUploadedFiles = uploadedFiles.filter(
				(item) => item.file.uid !== file.uid
			);
			setUploadedFiles(newUploadedFiles);
		},
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
				disabled={!loaded || uploadedFiles.length === 0}
			/>
			<ResponsiveButton
				type="primary"
				onClick={() =>
					convertFiles(uploadedFiles, selectedFormat, ffmpeg)
				}
				disabled={!loaded || uploadedFiles.length === 0}
				icon
			>
				{uploadedFiles.length > 1 ? "Convert All" : "Convert"}
			</ResponsiveButton>
		</div>
	);
}

export default FileConverter;
