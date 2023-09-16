import React from "react";
import style from "./Footer.module.scss";
import Icon from "components/General/Icon";
import { Typography, theme } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";

const Footer: React.FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<div
			className={style.footer}
			style={{ backgroundColor: colorBgContainer }}
		>
			<div className={style.footer__left}>
				<div className={style.footer__left_year}>
					<Typography.Text>
						&copy; {new Date().getFullYear()}
					</Typography.Text>
				</div>

				<div className={style.footer__left_legal}>
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
							<a href="#">Privacy</a>
						</li>
						<li>
							<a href="#">Terms</a>
						</li>
						<li>
							<a href="https://github.com/lifeparticle/binarytree#status">
								Status
							</a>
						</li>
					</ul>
				</div>
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
