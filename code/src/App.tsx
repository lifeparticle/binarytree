import { MantineProvider } from "@mantine/core";
import style from "./App.module.scss";
import { useToggle } from "@mantine/hooks";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";

function App() {
	const [value, toggle] = useToggle<"dark" | "light">(["light", "dark"]); // same as above
	return (
		<MantineProvider theme={{ colorScheme: value }}>
			<div className={style.app}>
				<Navigation value={value} toggle={toggle} />
				<Home />
			</div>
		</MantineProvider>
	);
}

export default App;
