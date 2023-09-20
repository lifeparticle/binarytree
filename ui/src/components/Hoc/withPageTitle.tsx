import Text from "components/General/Text/Text";
import usePageTitle from "components/Hoc/utils/hooks/usePageTitle";
import style from "./withpagetitle.module.scss";

const withPageTitle = <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	const WithPageTitle = (props: T) => {
		const [title, description] = usePageTitle();

		return (
			<div className={title === "Home" ? "" : style.withpagetitle}>
				{title !== "Home" && (
					<>
						<Text text={title} level={3} />
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
