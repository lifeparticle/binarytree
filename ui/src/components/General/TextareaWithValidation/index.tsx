import { Form, Input } from "antd";
import ValidationStatus from "./components/ValidateStatus";
import style from "./TextareaWithValidation.module.scss";
import { TextareaWithValidationProps } from "./utils/types";

const { TextArea } = Input;

const TextareaWithValidation: React.FC<TextareaWithValidationProps> = (
	props
) => {
	const { label, status, ...textareaProps } = props;
	return (
		<div className={style.textareaContainer}>
			<Form.Item label={label}>
				<TextArea data-gramm={false} {...textareaProps} allowClear />
			</Form.Item>

			<ValidationStatus status={status} />
		</div>
	);
};

export default TextareaWithValidation;
