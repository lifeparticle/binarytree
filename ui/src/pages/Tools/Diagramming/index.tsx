import { Excalidraw } from "@excalidraw/excalidraw";
import style from "./diagramming.module.scss";
import { useContext } from "react";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const Diagramming = () => {
	const { isDarkMode } = useContext(DarkModeContext);
	return (
		<div className={style.diagramming}>
			<Excalidraw theme={isDarkMode ? "dark" : "light"} />
		</div>
	);
};

export default Diagramming;
