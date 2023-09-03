interface Markdown {
	version: string;
	date: string;
	features: string[];
}

interface NotificationPropsType {
	colorText: string;
}

interface NotificationListPropsType {
	notifications: Markdown[] | undefined;
	colorText: string;
	isLoading: boolean;
	isError: boolean;
}

export type { Markdown, NotificationPropsType, NotificationListPropsType };
