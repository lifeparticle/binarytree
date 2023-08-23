import { Button, Dropdown, MenuProps, theme, Switch } from "antd";
import style from "./footer.module.scss";
import { Github, Moon, Settings, Sun } from "lucide-react";
import { classNames } from "lib/utils/helper";

interface FooterProps {
	handleThemeChange: () => void;
	isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ handleThemeChange, isDarkMode }) => {
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
							"_blank"
						)
					}
				>
					<Github color={colorText} />
				</Button>
			),
		},
	];
	return (
		<div
			className={classNames(
				style.footer,
				isDarkMode ? style.footer__dark : undefined
			)}
		>
			<Dropdown menu={{ items }} placement="topLeft">
				<Button>{<Settings />}</Button>
			</Dropdown>
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
