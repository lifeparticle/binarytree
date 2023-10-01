interface Markdown {
	version: string;
	date: string;
	features: string[];
}

interface NotificationListProps {
	notifications: Markdown[] | undefined;
	showRedFlag: boolean;
	colorText: string;
	isLoading: boolean;
	isError: boolean;
	handleRedFlagNotification: () => void;
}

export type { Markdown, NotificationListProps };
