import Text from "components/General/Text/Text";
import style from "./withPageTitle.module.scss";
import HelpIcon from "components/General/HelpIcon";
import { Space } from "antd";
import usePageTitle from "./utils/hooks";
import { HeadProvider, Title, Link, Meta } from "react-head";

const NO_PADDING = [
	"BinaryTree: Developer Productivity Tools",
	"About",
	"Terms",
	"Cookie Policy",
];

const NO_TITLE = [
	"BinaryTree: Developer Productivity Tools",
	"Terms",
	"Cookie Policy",
];

const withPageTitle = <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	const WithPageTitle = (props: T) => {
		const { title, description, helpText, url } = usePageTitle();

		return (
			<div
				className={
					NO_PADDING.includes(title) ? "" : style.withpagetitle
				}
			>
				<HeadProvider>
					<div className="Home">
						<Title>{title}</Title>
						<Link rel="canonical" href={url} />
						<Meta name="description" content={description} />
					</div>
				</HeadProvider>
				{!NO_TITLE.includes(title) && (
					<>
						<Space align="center">
							<Text text={title} level={3} />
							{helpText && <HelpIcon helpText={helpText} />}
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
