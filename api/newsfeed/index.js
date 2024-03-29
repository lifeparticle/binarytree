import express from "express";
import axios from "axios";
import { parseXML } from "./helper.js";

const app = express();
app.disable("x-powered-by");

app.use((req, res, next) => {
	const environment = process.env.NODE_ENV || "development";
	let origin = environment === "development" ? "*" : "https://binarytree.dev";
	res.header("Access-Control-Allow-Origin", origin);
	next();
});

app.get("/", (req, res) => {
	res.json({
		message: "Generate rss feed from our domain",
	});
});

app.get("/rss", async (req, res) => {
	try {
		const sitename = req.query.name;
		const sites = {
			"frontend-focus": "https://cprss.s3.amazonaws.com/frontendfoc.us.xml",
			"react-status": "https://cprss.s3.amazonaws.com/react.statuscode.com.xml",
			"news-api":
				"https://raw.githubusercontent.com/lifeparticle/binarytree/main/api/news/news.json",
		};
		const response = await axios.get(sites[sitename], {
			responseType: "arraybuffer",
		});

		if (response.status !== 200) {
			throw new Error("Failed to fetch the Medium RSS feed");
		}

		res.setHeader("Cache-Control", "s-max-age=86400, stale-while-revalidate");
		res.set("Content-Type", "application/json");

		if (sitename === "news-api") res.send(response.data);

		const xmlData = response.data.toString();

		parseXML(xmlData)
			.then((parsedData) => {
				console.log(parsedData);
				res.send({ articles: parsedData });
			})
			.catch((error) => {
				console.error("Error parsing XML:", error);
				res.status(500).json({ error: "Error parsing XML" });
			});
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ type: "error", message: error.message });
		} else {
			res.status(500).json({ message: "Something went wrong" });
		}
	}
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
