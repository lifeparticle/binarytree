import style from "./Home.module.scss";
import Footer from "components/Layouts/Footer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contribution from "./components/Contribution";
import Values from "./components/Values";

const Home = () => {
	return (
		<div className={style.home}>
			<div className={style.home__container}>
				<Hero />
				<Features />
				<Values />
				<Contribution />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
