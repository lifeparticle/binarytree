import ImageGeneratorFromColors from "../ImageGeneratorFromColors";
import style from "./Home.module.scss";

const Home: React.FC = () => {
	return (
		<div className={style.home}>
			<ImageGeneratorFromColors />
			<ImageGeneratorFromColors />
			<ImageGeneratorFromColors />
		</div>
	);
};

export default Home;
