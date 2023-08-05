export type SocialName = "github" | "youtube" | "website";

interface Social {
	name: SocialName;
	url: string;
}

interface ResourceType {
	name: string;
	category: string;
	subCategory: string[];
	socials: Social[];
	url: string;
}

export type { ResourceType };
