interface ListItemProps<T> {
	resource: T;
	handleOnClick: (url: string) => void;
	isLoading: boolean;
}

interface ListProps<T> {
	items: T[];
	resourceName: string;
	itemComponent: React.FC<ListItemProps<T>>;
	isLoading: boolean;
	isError: boolean;
}

export type { ListProps, ListItemProps };
