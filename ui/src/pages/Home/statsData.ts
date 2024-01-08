import { FEATURE_DATA } from "data/featureData";

export const STATS_DATA = [
	{
		id: 1,
		title: "Features",
		value: FEATURE_DATA.filter((feature) => !feature.in_progress).length,
		link: "",
	},
	{
		id: 2,
		title: "GitHub Stars",
		value: 23,
		link: "https://github.com/lifeparticle/binarytree/stargazers",
	},
	{
		id: 3,
		title: "Contributors",
		value: 7,
		link: "https://github.com/lifeparticle/binarytree/graphs/contributors",
	},
];
