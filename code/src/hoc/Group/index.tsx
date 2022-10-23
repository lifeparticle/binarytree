import { Group as MantineGroup } from "@mantine/core";
import style from "./Base64.module.scss";

type GroupProps = {
	children: any; // 👈️ define children prop
	id: any;
	key: any;
};

const Group: React.FC<GroupProps> = (children) => {
	return <MantineGroup className={style.base}>{children}</MantineGroup>;
};

export default Group;
