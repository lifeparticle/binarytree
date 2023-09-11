import { theme, Switch, Space } from "antd";
import style from "./Footer.module.scss";
import MonogramDark from "assets/netlify-monogram-dark.svg";
import MonogramLight from "assets/netlify-monogram-light.svg";
import Logo from "assets/netlify-dark.svg";
import { FooterProps } from "./utils/types";
import { classNames } from "lib/utils/helper";
import Icon from "components/General/Icon";
import { ResponsiveButton } from "components/General/FormComponents";

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
			<a href="https://www.netlify.com" target="_blank">
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
				checkedChildren={
					<div className={style.footer__moon}>
						<Icon size={16} color={colorBgContainer} name="Moon" />
					</div>
				}
				unCheckedChildren={
					<div className={style.footer__sun}>
						<Icon name="Sun" size={16} color={colorBgContainer} />
					</div>
				}
				onChange={handleThemeChange}
				style={{ backgroundColor: colorText }}
				checked={isDarkMode}
			/>

			<ResponsiveButton
				onClick={handleMenuCollapse}
				type="text"
				className={style.footer__menuCollapse}
			>
				{collapsed ? (
					<Icon name="ChevronsRight" color={colorText} />
				) : (
					<Icon name="ChevronsLeft" color={colorText} />
				)}
			</ResponsiveButton>
		</Space>
	);
};

export default Footer;
