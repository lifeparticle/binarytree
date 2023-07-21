import { Layout, Switch } from "antd";
import { Moon, Sun } from "lucide-react";
import style from "./header.module.scss";

const { Header: AntHeader } = Layout;

interface HeaderProps {
	isDarkMode: boolean;
	handleThemeChange: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, handleThemeChange }) => {
	return (
		<AntHeader className={style.header}>
			<Switch
				className={style.header__switch}
				checkedChildren={<Moon size={16} />}
				unCheckedChildren={<Sun size={16} />}
				onChange={handleThemeChange}
			/>
		</AntHeader>
	);
};

export default Header;
