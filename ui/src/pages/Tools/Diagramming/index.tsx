import { Excalidraw } from "@excalidraw/excalidraw";
import style from "./diagramming.module.scss";

const Diagramming = () => {
	return (
		<div className={style.diagramming}>
			<Excalidraw />
		</div>
	);
};

export default Diagramming;
