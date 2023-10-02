import style from "./Home.module.scss";
import Footer from "components/Layouts/Footer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contribution from "./components/Contribution";
import grid_light from "assets/grid_light.svg";
import grid_dark from "assets/grid_dark.svg";
import useTheme from "lib/utils/hooks/useTheme";

const Home = () => {
	const { isDarkMode } = useTheme();
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
