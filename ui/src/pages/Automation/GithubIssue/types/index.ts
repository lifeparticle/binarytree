interface IssueType {
	[key: string]: any;
	title: string;
	body?: string;
	assignee?: string | null;
	assignees?: string[];
	milestone?: null | string | number;
	labels?: string[];
}

interface SavedIssueType {
	url: string;
	title: string;
}

export type { IssueType, SavedIssueType };
