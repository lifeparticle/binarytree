import { Input, InputNumber } from "antd";
import { InputComponentPropsType } from "./utils/types";

const InputComponent: React.FC<InputComponentPropsType> = (props) => {
	return props.type === "number" ? (
		<InputNumber size="large" style={{ width: "100%" }} {...props} />
	) : (
		<Input allowClear size="large" style={{ width: "100%" }} {...props} />
	);
};

export default InputComponent;
