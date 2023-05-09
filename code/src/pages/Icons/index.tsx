import { Grid, Stack } from "@mantine/core";
import Button from "components/Button";
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

const Icons: React.FC = () => {
	return (
		<Grid grow className={style.icons}>
			{URLS.map((url: any) => {
				return (
					<Grid.Col span={4} key={url.id}>
						<Stack>
							<h1 className={style.icons__title}> {url.name}</h1>

							<Button
								component="a"
								href={url.website}
								target="_blank"
							>
								Website
							</Button>

							{url.github === "" ? null : (
								<Button
									component="a"
									href={url.github}
									target="_blank"
								>
									GitHub
								</Button>
							)}
						</Stack>
					</Grid.Col>
				);
			})}
		</Grid>
	);
};

export default Icons;
