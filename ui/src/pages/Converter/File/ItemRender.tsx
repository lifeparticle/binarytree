import { FC } from "react";
import { Button, UploadFile } from "antd";

import { Icon, ResponsiveSelectWithLabel } from "components/General";
import { IMAGE_TYPES } from "./constants";
import styles from "./FileConverter.module.scss";

interface ItemFileRenderProps {
	file: UploadFile;
	actions: {
		download: (file: UploadFile) => void;
		preview: (file: UploadFile) => void;
		remove: (file: UploadFile) => void;
	};
	selectedFormat: string;
	setSelectedFormat: (value: string) => void;
}

export const ItemFileRender: FC<ItemFileRenderProps> = ({
	file,
	actions,
	selectedFormat,
	setSelectedFormat,
}) => (
	<div className={styles.ic__item}>
		<h5>{file.name}</h5>
		<div className={styles.ic__item_right}>
			<ResponsiveSelectWithLabel
				label="Convert file to:"
				value={selectedFormat}
				options={IMAGE_TYPES}
				onSelect={(value) => {
					setSelectedFormat(value);
				}}
			/>
			<Button
				icon={<Icon name="Trash" />}
				onClick={() => actions.remove(file)}
			/>
		</div>
	</div>
);
