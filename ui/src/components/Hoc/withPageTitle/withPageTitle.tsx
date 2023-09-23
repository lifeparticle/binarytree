import Text from "components/General/Text/Text";
import style from "./withPageTitle.module.scss";
import HelpIcon from "components/General/HelpIcon";
import { Space } from "antd";
import usePageTitle from "./utils/hooks";
import { HeadProvider, Title, Link, Meta } from "react-head";

const withPageTitle = <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	const WithPageTitle = (props: T) => {
		const [title, description, helpText, url] = usePageTitle();

		return (
			<div
				className={
					title === "BinaryTree: Developer Productivity Tools"
						? ""
						: style.withpagetitle
				}
			>
				<HeadProvider>
					<div className="Home">
						<Title>{title}</Title>
						<Link rel="canonical" href={url} />
						<Meta name="description" content={description} />
					</div>
				</HeadProvider>
				{title !== "BinaryTree: Developer Productivity Tools" && (
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
