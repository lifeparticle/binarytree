import { Button, Space } from "antd";
import style from "./Icons.module.scss";

const URLS = [
	{
		id: 1,
		name: "Tabler Icons",
		website: "https://tabler-icons.io/",
		github: "https://github.com/tabler/tabler-icons",
	},
	{
		id: 2,
		name: "Iconoir",
		website: "https://iconoir.com/",
		github: "https://github.com/iconoir-icons/iconoir",
	},
	{
		id: 3,
		name: "Lordicon",
		website: "https://lordicon.com/",
		github: "",
	},
	{
		id: 4,
		name: "Iconer",
		website: "https://iconer.app/",
		github: "",
	},
];

const IconList: React.FC = () => {
	return (
		<Space className={style.icons}>
			{URLS.map((url) => {
				return (
					<Space>
						<h1 className={style.icons__title}> {url.name}</h1>
						<Button href={url.website} target="_blank">
							Website
						</Button>

						{url.github === "" ? null : (
							<Button href={url.github} target="_blank">
								GitHub
							</Button>
						)}
					</Space>
				);
			})}
		</Space>
	);
};

export default IconList;
