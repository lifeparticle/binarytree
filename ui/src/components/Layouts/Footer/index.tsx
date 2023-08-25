import { theme, Switch, Space, Button } from "antd";
import style from "./footer.module.scss";
import { ChevronsLeft, ChevronsRight, Moon, Sun } from "lucide-react";
import MonogramDark from "assets/netlify-monogram-dark.svg";
import MonogramLight from "assets/netlify-monogram-light.svg";
import Logo from "assets/netlify-dark.svg";
import { FooterProps } from "./utils/types";
import { classNames } from "lib/utils/helper";

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
					className={classNames(
						style.footer__monogram,
						isDarkMode
							? style.footer__monogram_dark
							: style.footer__monogram_light
					)}
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
					<ChevronsRight color={colorText} strokeWidth="1.3" />
				) : (
					<ChevronsLeft color={colorText} strokeWidth="1.3" />
				)}
			</Button>
		</Space>
	);
};

export default Footer;
