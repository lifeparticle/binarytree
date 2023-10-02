import { Excalidraw } from "@excalidraw/excalidraw";
import style from "./diagramming.module.scss";
import useTheme from "lib/utils/hooks/useTheme";

const Diagramming = () => {
	const { isDarkMode } = useTheme();
	return (
		<div className={style.diagramming}>
			<Excalidraw theme={isDarkMode ? "dark" : "light"} />
		</div>
	);
};

export default Diagramming;
