import { Excalidraw } from "@excalidraw/excalidraw";
import style from "./diagramming.module.scss";
import useMode from "lib/utils/hooks/useMode";

const Diagramming = () => {
	const { isDarkMode } = useMode();
	return (
		<div className={style.diagramming}>
			<Excalidraw theme={isDarkMode ? "dark" : "light"} />
		</div>
	);
};

export default Diagramming;
