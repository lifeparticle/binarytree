import { Layout, Switch } from "antd";
import { clsx } from "clsx";
import { Moon, Sun } from "lucide-react";
import style from "./header.module.scss";

const { Header: AntHeader } = Layout;

interface HeaderProps {
	isDarkMode: boolean;

	handleThemeChange: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, handleThemeChange }) => {
	return (
		<AntHeader
			className={clsx(
				style.headerContainer,
				isDarkMode && style.darkmode
			)}
		>
			<div className={style.headerContainer__toggler}>
				<Switch
					className="switch"
					checkedChildren={
						<Moon size={16} style={{ marginTop: "2px" }} />
					}
					unCheckedChildren={<Sun size={16} />}
					onChange={handleThemeChange}
				/>
			</div>
		</AntHeader>
	);
};

export default Header;
