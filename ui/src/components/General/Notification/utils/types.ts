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
	showRedFlag: boolean;
	colorText: string;
	isLoading: boolean;
	isError: boolean;
	handleRedFlagNotification: () => void;
}

export type { Markdown, NotificationPropsType, NotificationListPropsType };
