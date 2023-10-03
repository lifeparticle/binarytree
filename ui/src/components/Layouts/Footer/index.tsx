import React from "react";
import style from "./Footer.module.scss";
import Icon from "components/General/Icon";
import { Space, Typography } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";
import { Link } from "react-router-dom";
import bt_light from "assets/bt_light.png";
import bt_dark from "assets/bt_dark.png";
import { openLink } from "lib/utils/helper";
import useMode from "lib/utils/hooks/useMode";

const Footer: React.FC = () => {
	const { isDarkMode } = useMode();

	return (
		<div
			className={style.footer}
			style={{
				backgroundColor: isDarkMode ? "#2b2b2b" : "#e6e6e6",
			}}
		>
			<Space
				direction="vertical"
				size={"large"}
				className={style.footer__left}
				align="center"
			>
				<Space>
					<Link to={"/"}>
						<img
							src={isDarkMode ? bt_dark : bt_light}
							height={100}
						/>
					</Link>
				</Space>

				<ResponsiveButton
					key="Github"
					type="default"
					shape="circle"
					icon={<Icon name="Github" />}
					onClick={() =>
						openLink("https://github.com/lifeparticle/binarytree")
					}
				/>
				<Typography.Text>
					&copy; {new Date().getFullYear()} BinaryTree
				</Typography.Text>
			</Space>

			<Space direction="vertical" className={style.footer__right}>
				<Typography.Title level={4}>Product</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<a
							onClick={() =>
								openLink(
									"https://github.com/users/lifeparticle/projects/2"
								)
							}
						>
							Roadmap
						</a>
					</li>
				</ul>
			</Space>

			<Space direction="vertical" className={style.footer__right}>
				<Typography.Title level={4}>Developers</Typography.Title>
				<ul className={style.footer__list}>
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
				</ul>
			</Space>

			<Space direction="vertical" className={style.footer__right}>
				<Typography.Title level={4}>Company</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<Link to={"/about"}>About</Link>
					</li>
					{/* <li>
									<a
										onClick={() => openLink("/blog", false)}
									>
										Blog
									</a>
								</li> */}
				</ul>
			</Space>

			<Space direction="vertical" className={style.footer__right}>
				<Typography.Title level={4}>Legal</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<Link to={"/terms"}>Terms</Link>
					</li>
					<li>
						<Link to={"/privacy-policy"}>Privacy</Link>
					</li>

					<li>
						<Link to={"/cookie-policy"}>Cookie Policy</Link>
					</li>
				</ul>
			</Space>
		</div>
	);
};

export default Footer;
