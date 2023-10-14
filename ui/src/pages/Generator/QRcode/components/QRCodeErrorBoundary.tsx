import ErrorComponent from "components/General/ErrorComponent";
import { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
	children: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

class QRCodeErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<ErrorComponent
					category="Input Error"
					reasons={["Input text is too long"]}
					solutions={[
						"Input should be small",
						"Compressing the data before generating the QR code",
						"truncate or split the text and generate multiple QR Code",
					]}
				/>
			);
		}
		return this.props.children;
	}
}

export default QRCodeErrorBoundary;
