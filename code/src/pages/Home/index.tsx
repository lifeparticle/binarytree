import style from "./Home.module.scss";
import { Routes, Route } from "react-router-dom";
import ColorPicker from "pages/ColorPicker";
import ImageGeneratorFromColors from "pages/ImageGeneratorFromColors";
import MarkdownEditor from "pages/MarkdownEditor";
import Icons from "pages/Icons";
import TextEditor from "pages/TextEditor";
import DataGenerator from "pages/DataGenerator";
import Base64 from "pages/Base64";
import PixelConverter from "pages/PixelConverter";
import TableGenerator from "pages/MdTableGenerator";

const Home: React.FC = () => {
	return (
		<div className={style.home}>
			<Routes>
				<Route path="/" element={<ImageGeneratorFromColors />} />
				<Route path="/cp" element={<ColorPicker />} />
				<Route path="/me" element={<MarkdownEditor />} />
				<Route path="/te" element={<TextEditor />} />
				<Route path="/icons" element={<Icons />} />
				<Route path="/data_gen" element={<DataGenerator />} />
				<Route path="/base64" element={<Base64 />} />
				<Route path="/pixel_converter" element={<PixelConverter />} />
				<Route
					path="/md_table_generator"
					element={<TableGenerator />}
				/>
			</Routes>
		</div>
	);
};

export default Home;
