import React from "react";
import style from "./Footer.module.scss";
import Icon from "components/General/Icon";
import { Typography } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";

const Footer: React.FC = () => {
	return (
		<div className={style.footer}>
			<div className={style.footer__left}>
				<Typography.Text>&copy; 2023 Binarytree.</Typography.Text>

				<ul>
					<li>
						<a
							href="https://github.com/lifeparticle/binarytree/blob/main/CODE_OF_CONDUCT.md"
							target="_blank"
						>
							Code of Conduct
						</a>
					</li>

					<li>
						<a href="#">Privacy policy</a>
					</li>
					<li>
						<a href="#">Terms </a>
					</li>
				</ul>
			</div>

			<ResponsiveButton
				key="Github"
				type="default"
				shape="circle"
				icon={<Icon name="Github" />}
				onClick={() =>
					window.open(
						"https://github.com/lifeparticle/binarytree",
						"_blank",
						"noopener"
					)
				}
			/>
		</div>
	);
};

export default Footer;
