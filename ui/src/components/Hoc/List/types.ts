interface ListItemProps<T> {
	resource: T;
	handleOnClick: (url: string) => void;
}

interface ListProps<T> {
	items: T[];
	resourceName: string;
	itemComponent: React.FC<ListItemProps<T>>;
}

export type { ListProps, ListItemProps };
