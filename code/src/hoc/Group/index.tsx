import { Group as MantineGroup } from "@mantine/core";
import style from "./Group.module.scss";

type GroupProps = {
	children: any;
};

const Group: React.FC<GroupProps> = ({ children }) => {
	return <MantineGroup className={style.base}>{children}</MantineGroup>;
};

export default Group;
