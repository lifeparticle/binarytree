import { theme, Switch, Space, Button } from "antd";
import style from "./footer.module.scss";
import { ChevronsLeft, ChevronsRight, Moon, Sun } from "lucide-react";
import MonogramDark from "assets/netlify-monogram-dark.svg";
import MonogramLight from "assets/netlify-monogram-light.svg";
import Logo from "assets/netlify-dark.svg";
import { FooterProps } from "./utils/types";

const Footer: React.FC<FooterProps> = ({
	handleThemeChange,
	isDarkMode,
	collapsed,
	handleMenuCollapse,
}) => {
	const {
		token: { colorBgContainer, colorText },
	} = theme.useToken();

	const monogram = isDarkMode ? MonogramDark : MonogramLight;
	return (
		<Space
			className={style.footer}
			style={{ backgroundColor: colorBgContainer }}
		>
			<a href="https://www.netlify.com">
				<img
					src={collapsed ? monogram : Logo}
					className={style.footer__monogram}
					alt="Deploys by Netlify"
				/>
			</a>

			<Switch
				checkedChildren={<Moon size={16} color={colorBgContainer} />}
				unCheckedChildren={<Sun size={16} />}
				onChange={handleThemeChange}
				style={{ backgroundColor: colorText }}
				checked={isDarkMode}
			/>

			<Button
				onClick={handleMenuCollapse}
				type="text"
				className={style.footer__menuCollapse}
			>
				{collapsed ? (
					<ChevronsRight color={colorText} />
				) : (
					<ChevronsLeft color={colorText} />
				)}
			</Button>
		</Space>
	);
};

export default Footer;
