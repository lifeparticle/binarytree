import { InputNumber, Form, Row, Col, Input } from "antd";

interface InputComponentProps {
	label: string;
	precision?: number;
	min?: number;
	step?: number;
	value: number | string;
	onChange: any;
	tooltip?: string;
	showClipboard?: boolean;
	placeholder?: string;
	type?: "text" | "number";
}
const InputComponent: React.FC<InputComponentProps> = (props) => (
	<Form.Item
		label={props.label}
		tooltip={props.tooltip || "This is a required field"}
	>
		<Row gutter={[16, 0]}>
			<Col span={22}>
				{props.type === "number" ? (
					<InputNumber
						size="large"
						style={{ width: "100%" }}
						{...props}
					/>
				) : (
					<Input size="large" style={{ width: "100%" }} {...props} />
				)}
			</Col>
		</Row>
	</Form.Item>
);

export default InputComponent;
