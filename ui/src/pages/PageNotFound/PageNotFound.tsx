import { FC } from "react";
import style from "./PageNotFound.module.scss";
import not_found from "assets/not_found.jpg";

const PageNotFound: FC = () => {
	return (
		<div className={style.pnf}>
			<a
				href="https://unsplash.com/photos/Oze6U2m1oYU"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					alt="about"
					src={not_found}
					className={style.about__intro_img}
				/>
			</a>
		</div>
	);
};

export default PageNotFound;
