import { Form, Input, InputNumber } from "antd";
import { InputComponentPropsType } from "./utils/types";

const InputComponent: React.FC<InputComponentPropsType> = (props) => {
	return (
		<Form.Item label={props.label} tooltip={props.tooltip}>
			{props.type === "number" ? (
				<InputNumber
					size="large"
					style={{ width: "100%" }}
					{...props}
				/>
			) : (
				<Input
					allowClear
					size="large"
					style={{ width: "100%" }}
					{...props}
				/>
			)}
		</Form.Item>
	);
};

export default InputComponent;
