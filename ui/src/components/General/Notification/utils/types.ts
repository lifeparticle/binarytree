interface Markdown {
	version: string;
	date: string;
	features: string[];
}

interface NotificationListProps {
	notifications: Markdown[] | undefined;
	showRedFlag: boolean;
	isLoading: boolean;
	isError: boolean;
	handleRedFlagNotification: () => void;
}

export type { Markdown, NotificationListProps };
