import { ListItemProps, ListProps } from "components/RenderProps/List/types";

interface ListSearchResultsProps<T> extends ListProps<T> {
	resourceName: string;
	isError: boolean;
	source?: string;
}

export type { ListSearchResultsProps, ListItemProps };
