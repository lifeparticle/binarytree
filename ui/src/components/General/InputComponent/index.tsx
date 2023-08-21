import { Input, InputNumber } from "antd";

type NumberType = {
	type: "number";
	value: number;
	onChange: (value: number | null) => void;
};

type TextType = {
	type: "text";
	value: string;
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputComponentPropsType = {
	label: string;
	precision?: number;
	min?: number;
	max?: number;
	step?: number;
	tooltip?: string;
	placeholder?: string;
} & (NumberType | TextType);

const InputComponent: React.FC<InputComponentPropsType> = (props) => {
	return props.type === "number" ? (
		<InputNumber size="large" style={{ width: "100%" }} {...props} />
	) : (
		<Input allowClear size="large" style={{ width: "100%" }} {...props} />
	);
};

export default InputComponent;
