import { rest } from "msw";

export const handlers = [
	rest.post(
		"https://api.github.com/repos/:owner/:repo/issues",
		(_, res, ctx) => {
			return res(
				ctx.json({
					title: "Created Issue",
					html_url: "https://github.com/owner/repo/issues/1",
				})
			);
		}
	),
];
