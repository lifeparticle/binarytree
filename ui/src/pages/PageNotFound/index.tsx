import React from "react";
import style from "./PageNotFound.module.scss";
import not_found from "assets/not_found.jpg";

const PageNotFound: React.FC = () => {
	return (
		<div className={style.pnf}>
			<img
				alt="about"
				src={not_found}
				className={style.about__intro_img}
				onClick={() =>
					window.open(
						"https://unsplash.com/photos/Oze6U2m1oYU",
						"_blank",
						"noopener"
					)
				}
			/>
		</div>
	);
};

export default PageNotFound;
