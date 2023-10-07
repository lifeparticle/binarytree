import { Excalidraw } from "@excalidraw/excalidraw";
import style from "./Diagramming.module.scss";
import useMode from "hooks/useMode";

const Diagramming = () => {
	const { isDarkMode } = useMode();
	return (
		<div className={style.diagramming}>
			<Excalidraw theme={isDarkMode ? "dark" : "light"} />
		</div>
	);
};

export default Diagramming;
