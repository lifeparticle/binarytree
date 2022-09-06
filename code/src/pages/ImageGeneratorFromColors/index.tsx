import style from "./ImageGeneratorFromColors.module.scss";
import { Button, Textarea, NumberInput, Space } from "@mantine/core";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";

// #FF0000, #00FFFF, #FFFFFF, #C0C0C0, #000000
/*
#FF0000
#00FFFF
#FFFFFF
#C0C0C0
#000000
*/

const ImageGeneratorFromColors: React.FC = () => {
	const [colors, setColors] = useState<Array<string>>([]);
	const domEl = useRef<Array<HTMLDivElement>>([]);
	const [height, setHeight] = useState(40);
	const [width, setWidth] = useState(40);
	const [rounded, setRounded] = useState(20);
	domEl.current = [];

	const onTextAreaChange = (event: any) => {
		setColors(event.currentTarget.value.split(/[\n,]+/));
	};

	const onButtonClick = async () => {
		console.log("on button click", domEl.current);
		if (!domEl.current) return;
		const zip = new JSZip();

		await Promise.all(
			domEl.current.map(async (el, idx) => {
				const dataUrl = await toPng(el);
				const baseData = await JSZipUtils.getBinaryContent(dataUrl);
				zip.file(`image-${idx + 1}.png`, baseData, { binary: true });
			})
		);

		const content = await zip.generateAsync({ type: "blob" });
		saveAs(content, "ImageGeneratorFromColors.zip");
	};

	return (
		<div className={style.igfc}>
			<Textarea
				placeholder="Paste colors separated by commas or new line"
				label="Colors"
				radius="md"
				minRows={20}
				onChange={onTextAreaChange}
			/>
			<div>
				{" "}
				<NumberInput
					mt="xl"
					label="Height"
					placeholder="NumberInput with custom layout"
					value={height}
					onChange={(val: any) => setHeight(val)}
				/>
				<NumberInput
					mt="xl"
					label="Width"
					placeholder="NumberInput with custom layout"
					value={width}
					onChange={(val: any) => setWidth(val)}
				/>
				<NumberInput
					mt="xl"
					label="Border radius"
					placeholder="NumberInput with custom layout"
					value={rounded}
					onChange={(val: any) => setRounded(val)}
				/>
				<Space h="xl" />
				<Button
					styles={(theme) => ({
						root: {
							backgroundColor:
								theme.colorScheme === "dark" ? theme.colors.dark : "#228be6",
						},
					})}
					onClick={onButtonClick}
				>
					Downlaod
				</Button>
			</div>

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
							style={{
								backgroundColor: color,
								height: `${height}px`,
								width: `${width}px`,
								borderRadius: `${rounded}px`,
							}}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageGeneratorFromColors;
