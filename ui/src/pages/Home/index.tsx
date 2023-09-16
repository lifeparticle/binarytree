import Text from "components/General/Text/Text";
import style from "./Home.module.scss";

const Home = () => {
	return (
		<div className={style.home}>
			<Text text="Your Mate in Software Development" level={1} />
		</div>
	);
};

export default Home;
