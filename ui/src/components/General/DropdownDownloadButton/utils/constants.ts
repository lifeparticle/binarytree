import { MenuProps } from "antd";

const IMAGE_TYPE = {
	jpeg: ".jpeg",
	png: ".png",
};

const items: MenuProps["items"] = [
	{
		label: "Download JPEG",
		key: IMAGE_TYPE.jpeg,
	},
	{
		label: "Download PNG",
		key: IMAGE_TYPE.png,
	},
];

export { IMAGE_TYPE, items };
