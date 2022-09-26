import { Grid, Stack } from "@mantine/core";
import { IconAppWindow, IconBrandGithub } from "@tabler/icons";
import Button from "components/Button";

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
];

const Icons: React.FC = () => {
	return (
		<Grid grow>
			{URLS.map((url: any) => {
				return (
					<Grid.Col span={4} key={url.id}>
						<Stack>
							<h1>{url.name}</h1>

							<Button
								component="a"
								href={url.website}
								target="_blank"
								leftIcon={<IconAppWindow size={14} />}
							>
								Website
							</Button>

							{url.github === "" ? null : (
								<Button
									component="a"
									href={url.github}
									target="_blank"
									leftIcon={<IconBrandGithub size={14} />}
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
