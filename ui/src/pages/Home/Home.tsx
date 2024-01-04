import style from "./Home.module.scss";
import { Footer } from "components/Layouts";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contribution from "./components/Contribution";
import { useMode } from "hooks";
import { classNames } from "utils/helper-functions/string";

const Home = () => {
	const { isDarkMode } = useMode();

	const classes = classNames(
		style.home,
		isDarkMode ? style.home_dark : style.home_light
	);

	return (
		<>
			<div className={classes}>
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
