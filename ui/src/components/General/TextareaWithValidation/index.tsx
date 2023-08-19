import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import ValidationStatus from "./components/ValidateStatus";
import style from "./textareavalidation.module.scss";

interface TextareaWithValidationProps {
	placeholder?: string;
	rows?: number;
	autoCorrect?: string;
	value: string;
	onChange: (value: any) => void;

	label: string;
	status: string;
}

const TextareaWithValidation: React.FC<TextareaWithValidationProps> = (
	props
) => {
	const { label, status, ...textareaProps } = props;
	return (
		<div className={style.textareaContainer}>
			<Form.Item label={label}>
				<TextArea {...textareaProps} />
			</Form.Item>

			<ValidationStatus status={status} />
		</div>
	);
};

export default TextareaWithValidation;
