import { Input, InputNumber } from "antd";

interface InputComponentProps {
	label: string;
	precision?: number;
	min?: number;
	max?: number;
	step?: number;
	value: number | string;
	tooltip?: string;
	onChange: (value: any) => void;
	placeholder?: string;
	type: "text" | "number";
}
const InputComponent: React.FC<InputComponentProps> = (props) => {
	return props.type === "number" ? (
		<InputNumber size="large" style={{ width: "100%" }} {...props} />
	) : (
		<Input allowClear size="large" style={{ width: "100%" }} {...props} />
	);
};

export default InputComponent;
