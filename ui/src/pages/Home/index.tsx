import style from "./Home.module.scss";
import { Footer } from "components/Layouts";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contribution from "./components/Contribution";
import grid_light from "assets/Home/grid_light.svg";
import grid_dark from "assets/Home/grid_dark.svg";
import useMode from "hooks/useMode";

const Home = () => {
	const { isDarkMode } = useMode();

	return (
		<>
			<div
				className={style.home}
				style={{
					backgroundImage: isDarkMode
						? `url(${grid_dark})`
						: `url(${grid_light})`,
				}}
			>
				<div className={style.home__container}>
					<Hero />
					<Features />
					<Contribution />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
