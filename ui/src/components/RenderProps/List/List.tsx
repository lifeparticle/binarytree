import { ListProps } from "./types";

const List = <T,>({
	items,
	itemComponent: ItemComponent,
	isLoading,
}: ListProps<T>): JSX.Element => {
	const handleOnClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<>
			{items?.map((item, i) => (
				<ItemComponent
					key={i}
					resource={item as T}
					handleOnClick={handleOnClick}
					isLoading={isLoading}
				/>
			))}
		</>
	);
};

export default List;
