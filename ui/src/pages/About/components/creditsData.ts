interface Credits {
	key: string;
	name: string;
	url: string;
}

function createCredit(key: string, name: string, url: string): Credits {
	return { key, name, url };
}

export const CREDITS_DATA: Credits[] = [
	createCredit("1", "thetallbloke", "https://github.com/thetallbloke"),
	createCredit("2", "Open Props", "https://github.com/argyleink/open-props"),
	createCredit("3", "News API", "https://newsapi.org"),
	createCredit(
		"4",
		"Movie for hackers",
		"https://github.com/k4m4/movies-for-hackers"
	),
	createCredit("5", "unDraw", "https://undraw.co/"),
	createCredit("6", "Frontend Focus", "https://frontendfoc.us/"),
	createCredit("7", "React Status", "https://react.statuscode.com/"),
	createCredit("8", "Lucide", "https://lucide.dev/"),
	createCredit("9", "Dudeowl", "https://99designs.com.au/profiles/dudeowl"),
	createCredit("10", "Vertex Designs", "https://unsplash.com/@vertex_800"),
];
