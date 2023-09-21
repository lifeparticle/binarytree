import Text from "components/General/Text/Text";
import style from "./withPageTitle.module.scss";
import HelpIcon from "components/General/HelpIcon";
import { Space } from "antd";
import { PAGES } from "./utils/constants";
import usePageTitle from "./utils/hooks";

const withPageTitle = <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	const WithPageTitle = (props: T) => {
		const [title, description, helpText] = usePageTitle();

		return (
			<div className={title === "Home" ? "" : style.withpagetitle}>
				{title !== "Home" && (
					<>
						<Space align="center">
							<Text text={title} level={3} />
							{helpText && !PAGES.includes(title) && (
								<HelpIcon helpText={helpText} />
							)}
						</Space>
						<Text text={description} level={5} />
						<br />
					</>
				)}

				<WrappedComponent {...props} />
			</div>
		);
	};

	return WithPageTitle;
};

export default withPageTitle;
