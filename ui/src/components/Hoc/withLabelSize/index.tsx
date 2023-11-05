import { Form } from "antd";
import useGetSize from "hooks/useGetSize";

interface CommonProps {
	label?: string;
	tooltip?: string;
}

const withLabelSize = <T extends CommonProps>(
	WrappedComponent: React.ComponentType<T>
) => {
	return (props: T) => {
		const { size } = useGetSize();

		return (
			<Form.Item label={props.label}>
				<WrappedComponent size={size} {...props} />
			</Form.Item>
		);
	};
};

export default withLabelSize;
