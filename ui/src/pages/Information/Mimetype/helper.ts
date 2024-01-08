import { MimeTableDataType } from "./types";

function filteredMimeType(items: MimeTableDataType[], searchQuery: string) {
	const lowercaseSearchQuery = searchQuery.toLowerCase();
	return items?.filter(
		(item) =>
			item.name.includes(lowercaseSearchQuery) ||
			item?.code?.["content-type"]?.includes(lowercaseSearchQuery)
	);
}

export { filteredMimeType };
