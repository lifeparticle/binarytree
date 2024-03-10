import xml2js from "xml2js";
export function parseXML(value) {
	return new Promise((resolve, reject) => {
		const parser = new xml2js.Parser({
			explicitArray: false,
			ignoreAttrs: true,
		});
		parser.parseString(value, (err, result) => {
			if (err) reject(err);
			else {
				const items = result.rss.channel.item;
				const list = items.map((item) => ({
					title: item.title,
					pubDate: item.pubDate,
					url: item.link,
					image: extractImage(item.description),
				}));
				resolve(list);
			}
		});
	});
}

function extractImage(description) {
	const regex = /<img.*?src=["'](.*?)["']/;
	const match = regex.exec(description);
	return match ? match[1] : null;
}
