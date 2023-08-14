import style from "./footer.module.scss";

const Footer = () => {
	return (
		<div className={style.footer}>
			<a href="https://www.netlify.com">
				<img
					src="https://www.netlify.com/v3/img/components/netlify-dark.svg"
					alt="Deploys by Netlify"
				/>
			</a>
		</div>
	);
};

export default Footer;
