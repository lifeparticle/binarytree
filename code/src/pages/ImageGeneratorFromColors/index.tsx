import style from "./ImageGeneratorFromColors.module.scss";
import { Button, Space, Textarea } from "@mantine/core";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";

// #FF0000, #00FFFF, #FFFFFF, #C0C0C0, #000000

const ImageGeneratorFromColors: React.FC = () => {
	const [colors, setColors] = useState<Array<string>>([]);
	const domEl = useRef<Array<HTMLDivElement>>([]);
	domEl.current = [];

	const onTextAreaChange = (event: any) => {
		setColors(event.currentTarget.value.split(","));
	};

	const onButtonClick = async () => {
		console.log("on button click", domEl.current);
		if (!domEl.current) return;
		const zip = new JSZip();

		await Promise.all(
			domEl.current.map(async (el, idx) => {
				const dataUrl = await toPng(el);
				const baseData = await JSZipUtils.getBinaryContent(dataUrl);
				zip.file(`test-${idx + 1}.png`, baseData, { binary: true });
			})
		);

		const content = await zip.generateAsync({ type: "blob" });
		saveAs(content, "ImageGeneratorFromColors.zip");
	};

	return (
		<div className={style.igfc}>
			<Space h="md" />
			<Textarea
				placeholder="Paste colors separated by commas"
				label="Colors"
				radius="md"
				minRows={4}
				onChange={onTextAreaChange}
			/>
			<Space h="md" />
			<div className={style.colorGrid}>
				{colors.map((color: string) => {
					return (
						<div
							ref={(ref) => {
								if (ref) {
									domEl.current.push(ref);
								}
							}}
							key={color}
							style={{ backgroundColor: color }}
						></div>
					);
				})}
			</div>
			<Space h="md" />
			<Button onClick={onButtonClick}>Downlaod</Button>
			<Space h="md" />
		</div>
	);
};

export default ImageGeneratorFromColors;
