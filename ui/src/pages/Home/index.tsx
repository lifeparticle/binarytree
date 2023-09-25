import style from "./Home.module.scss";
import Footer from "components/Layouts/Footer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Contribution from "./components/Contribution";

const Home = () => {
	return (
		<>
			<div className={style.home}>
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
