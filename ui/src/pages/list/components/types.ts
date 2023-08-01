interface ListProps<T> {
	items: T[];
	resourceName: string;
	itemComponent: React.FC<{
		resource: T;
		handleOnClick: (url: string) => void;
	}>;
}

export type { ListProps };
