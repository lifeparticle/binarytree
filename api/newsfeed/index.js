import express from "express";
import axios from "axios";

const app = express();

app.use((req, res, next) => {
	const environment = process.env.NODE_ENV || "development";
	let origin =
		environment === "development" ? "*" : "https://www.binarytree.dev";
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
		const siteUrl = req.query.url;
		const response = await axios.get(siteUrl, {
			responseType: "arraybuffer",
		});

		if (response.status !== 200) {
			throw new Error("Failed to fetch the Medium RSS feed");
		}

		res.set("Content-Type", "application/xml");

		res.send(response.data);
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ type: "error", message: error.message });
		} else {
			res.status(500).json({ message: "Something went wrong" });
		}
	}
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
