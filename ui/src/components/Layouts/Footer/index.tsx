import React, { useContext } from "react";
import style from "./Footer.module.scss";
import Icon from "components/General/Icon";
import { Space, Typography, theme } from "antd";
import { ResponsiveButton } from "components/General/FormComponents";
import { Link } from "react-router-dom";
import logo_light from "assets/logo_light.svg";
import logo_dark from "assets/logo_dark.svg";
import { DarkModeContext } from "lib/utils/context/DarkModeProvider";

const Footer: React.FC = () => {
	const { isDarkMode } = useContext(DarkModeContext);
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<div
			className={style.footer}
			style={{ backgroundColor: colorBgContainer }}
		>
			<Space
				direction="vertical"
				size={"large"}
				className={style.footer__left}
			>
				<Space>
					<Link to={"/"}>
						<img
							src={isDarkMode ? logo_dark : logo_light}
							height={60}
							width={60}
						/>
					</Link>
					<Typography.Title level={4}>Binarytree</Typography.Title>
				</Space>
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
				<Typography.Text>
					&copy; {new Date().getFullYear()} BinaryTree
				</Typography.Text>
			</Space>

			<Space direction="vertical">
				<Typography.Title level={4}>Product</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<a
							href="https://github.com/users/lifeparticle/projects/2"
							target="_blank"
						>
							Roadmap
						</a>
					</li>
				</ul>
			</Space>

			<Space direction="vertical">
				<Typography.Title level={4}>Developers</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<a
							href="https://github.com/lifeparticle/binarytree/blob/main/CODE_OF_CONDUCT.md"
							target="_blank"
						>
							Code of Conduct
						</a>
					</li>
					<li>
						<a
							href="https://github.com/lifeparticle/binarytree#status"
							target="_blank"
						>
							Status
						</a>
					</li>
				</ul>
			</Space>

			<Space direction="vertical">
				<Typography.Title level={4}>Company</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<a href="/about">About</a>
					</li>
					{/* <li>
									<a
										href="#"
										target="_blank"
									>
										Blog
									</a>
								</li> */}
				</ul>
			</Space>

			<Space direction="vertical">
				<Typography.Title level={4}>Legal</Typography.Title>
				<ul className={style.footer__list}>
					<li>
						<a href="#">Terms</a>
					</li>
					<li>
						<a href="#">Privacy</a>
					</li>

					<li>
						<a href="/cookie-policy">Cookie Policy</a>
					</li>
				</ul>
			</Space>
		</div>
	);
};

export default Footer;
