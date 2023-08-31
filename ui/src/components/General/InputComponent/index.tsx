import { Form, Input, InputNumber } from "antd";
import { InputComponentPropsType } from "./utils/types";
import useGetSize from "lib/utils/hooks/useGetSize";

const InputComponent: React.FC<InputComponentPropsType> = (props) => {
	const { size } = useGetSize();
	return (
		<Form.Item label={props.label} tooltip={props.tooltip}>
			{props.type === "number" ? (
				<InputNumber size={size} style={{ width: "100%" }} {...props} />
			) : (
				<Input
					allowClear
					size={size}
					style={{ width: "100%" }}
					{...props}
				/>
			)}
		</Form.Item>
	);
};

export default InputComponent;
