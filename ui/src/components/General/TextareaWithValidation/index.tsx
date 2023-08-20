import { Form } from "antd";
import ValidationStatus from "./components/ValidateStatus";
import style from "./textareavalidation.module.scss";
import { Input } from "antd";

const { TextArea } = Input;

interface TextareaWithValidationProps {
	placeholder?: string;
	rows?: number;
	autoCorrect?: string;
	value: string | number;
	onChange: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
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
