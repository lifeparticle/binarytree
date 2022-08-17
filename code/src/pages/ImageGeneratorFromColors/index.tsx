import style from "./ImageGeneratorFromColors.module.scss";
import { Button, Space, Textarea } from "@mantine/core";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";

// #FF0000, #00FFFF, #FFFFFF, #C0C0C0, #000000

const ImageGeneratorFromColors: React.FC = () => {
	const [value, setValue] = useState("");
	const [divs, setDivs] = useState("");
	const domEl = useRef(null);
	console.log(value);

	const onTextareaChange = (event: any) => {
		setValue(event.currentTarget.value);
		const colors = event.currentTarget.value.split(",");
		const divs = colors.map((color: string) => {
			return (
				<div ref={domEl} key={color} style={{ backgroundColor: color }}></div>
			);
		});
		setDivs(divs);
		console.log(divs);
	};

	const onButtonClik = async () => {
		if (!domEl.current) return;
		const dataUrl = await toPng(domEl.current);

		const zip = new JSZip();
		const baseData = await JSZipUtils.getBinaryContent(dataUrl);
		zip.file("test.png", baseData, { binary: true });

		zip.generateAsync({ type: "blob" }).then(function (content) {
			saveAs(content, "ImageGeneratorFromColors.zip");
		});
	};

	return (
		<div className={style.igfc}>
			<Space h="md" />
			<Textarea
				placeholder="Paste colors separated by commas"
				label="Colors"
				radius="md"
				minRows={4}
				onChange={onTextareaChange}
			/>
			<Space h="md" />
			<div className={style.colorGrid}>{divs}</div>
			<Space h="md" />
			<Button onClick={onButtonClik}>Downlaod</Button>
			<Space h="md" />
		</div>
	);
};

export default ImageGeneratorFromColors;
