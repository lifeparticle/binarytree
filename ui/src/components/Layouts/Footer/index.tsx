import React from "react";
import style from "./Footer.module.scss";
import Icon from "components/General/Icon";
import { Typography, theme } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";
import { openLink } from "lib/utils/helper";

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
						&copy; {new Date().getFullYear()} Binarytree
					</Typography.Text>
				</div>
				<ul className={style.footer__left_list}>
					<li>
						<a
							onClick={() =>
								openLink(
									"https://github.com/lifeparticle/binarytree/blob/main/CODE_OF_CONDUCT.md"
								)
							}
						>
							Code of Conduct
						</a>
					</li>

					<li>
						<a onClick={() => openLink("/privacy-policy", false)}>
							Privacy Policy
						</a>
					</li>
					<li>
						<a onClick={() => openLink("/terms", false)}>Terms</a>
					</li>
					<li>
						<a
							onClick={() =>
								openLink(
									"https://github.com/lifeparticle/binarytree#status"
								)
							}
						>
							Status
						</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</div>

			<ResponsiveButton
				key="Github"
				type="default"
				shape="circle"
				icon={<Icon name="Github" />}
				onClick={() =>
					openLink("https://github.com/lifeparticle/binarytree")
				}
			/>
		</div>
	);
};

export default Footer;
