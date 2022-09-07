import { AppShell, Header, MantineProvider } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";

function App() {
	const [value, toggle] = useToggle<"dark" | "light">(["dark", "light"]);
	return (
		<MantineProvider theme={{ colorScheme: value }}>
			<AppShell
				padding="md"
				navbar={<Navigation value={value} toggle={toggle} />}
				header={
					<Header height={60} p="xs">
						{/* Header content */}
					</Header>
				}
				styles={(theme) => ({
					main: {
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				})}
			>
				<Home />
			</AppShell>
		</MantineProvider>
	);
}

export default App;
