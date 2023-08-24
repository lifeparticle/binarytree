import { Button, Dropdown, MenuProps, theme, Switch, Space } from "antd";
import style from "./footer.module.scss";
import { Github, Moon, Settings, Sun } from "lucide-react";
import { classNames } from "lib/utils/helper";
import { FooterProps } from "./utils/types";
import MonogramDark from "assets/netlify-monogram-dark.svg";
import MonogramLight from "assets/netlify-monogram-light.svg";
import Logo from "assets/netlify-dark.svg";

const Footer: React.FC<FooterProps> = ({
	handleThemeChange,
	isDarkMode,
	collapsed,
}) => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<Switch
					checkedChildren={
						<Moon size={16} color={colorBgContainer} />
					}
					unCheckedChildren={<Sun size={16} />}
					onChange={handleThemeChange}
					style={{ backgroundColor: colorText }}
					checked={isDarkMode}
				/>
			),
		},
		{
			key: "2",
			label: (
				<Button
					type="text"
					onClick={() =>
						window.open(
							"https://github.com/lifeparticle/binarytree",
							"_blank",
							"noopener"
						)
					}
				>
					<Github color={colorText} />
				</Button>
			),
		},
	];

	const darkModeMonogram = isDarkMode ? MonogramDark : MonogramLight;
	return (
		<Space
			className={classNames(style.footer)}
			style={{ backgroundColor: colorBgContainer }}
		>
			<Dropdown menu={{ items }} placement="topLeft">
				<Button>{<Settings />}</Button>
			</Dropdown>
			<a href="https://www.netlify.com">
				<img
					src={collapsed ? darkModeMonogram : Logo}
					className={style.footer__monogram}
					alt="Deploys by Netlify"
				/>
			</a>
		</Space>
	);
};

export default Footer;
