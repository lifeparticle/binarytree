interface ListItemProps<T> {
	resource: T;
	handleOnClick: (url: string) => void;
	isLoading: boolean;
}

interface ListProps<T> {
	items: T[];
	itemComponent: React.FC<ListItemProps<T>>;
	isLoading: boolean;
}

export type { ListProps, ListItemProps };
