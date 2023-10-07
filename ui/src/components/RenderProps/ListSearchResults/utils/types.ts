import {
	ListItemProps,
	ListProps,
} from "components/RenderProps/List/utils/types";

interface ListSearchResultsProps<T> extends ListProps<T> {
	resourceName: string;
	isError: boolean;
}

export type { ListSearchResultsProps, ListItemProps };
