import style from "./Routes.module.scss";
import { Space } from "antd";
import { HeadProvider, Title, Link, Meta } from "react-head";
import { ErrorBoundary } from "react-error-boundary";
import { Text, HelpIcon, Drawer, FallbackComponent } from "components/General";
import { usePageTitle } from "hooks";

const NO_PADDING = [
	"BinaryTree: Developer Productivity Tools",
	"About",
	"Terms",
	"Cookie Policy",
	"Privacy Policy",
	"Feedback",
];

const NO_TITLE = [
	"BinaryTree: Developer Productivity Tools",
	"Terms",
	"Cookie Policy",
	"Privacy Policy",
	"About",
	"Feedback",
];

const withPageTitle = <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	const WithPageTitle = (props: T) => {
		const { title, description, helpObject, url, beamObject } =
			usePageTitle();

		return (
			<ErrorBoundary fallback={<p>Something went wrong</p>}>
				<div
					className={
						NO_PADDING.includes(title) ? "" : style.withpagetitle
					}
				>
					<ErrorBoundary fallback={<p>Something went wrong</p>}>
						<HeadProvider>
							<div className="Home">
								<Title>{title}</Title>
								<Meta name="title" content={title} />
								<Link rel="canonical" href={url} />
								<Meta
									name="description"
									content={description}
								/>
							</div>
						</HeadProvider>
						{!NO_TITLE.includes(title) && (
							<div className={style.withpagetitle__header}>
								<Space
									align="center"
									className={
										style.withpagetitle__header_title
									}
								>
									<Text text={title} level={3} />
									{Object.keys(helpObject).length > 0 && (
										<HelpIcon helpObject={helpObject} />
									)}
									{beamObject.length > 0 && (
										<Drawer beamObject={beamObject} />
									)}
								</Space>
								<Text text={description} level={5} />
								<br />
							</div>
						)}
					</ErrorBoundary>
					<ErrorBoundary FallbackComponent={FallbackComponent}>
						<WrappedComponent {...props} />
					</ErrorBoundary>
				</div>
			</ErrorBoundary>
		);
	};

	return WithPageTitle;
};

export default withPageTitle;
