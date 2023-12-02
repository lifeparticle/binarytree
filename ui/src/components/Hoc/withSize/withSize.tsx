import { useGetSize } from "hooks";

const withSize = <T,>(WrappedComponent: React.ComponentType<T>) => {
	return (props: T) => {
		const { size } = useGetSize();

		return <WrappedComponent size={size} {...props} />;
	};
};

export default withSize;
