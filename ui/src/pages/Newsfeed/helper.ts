function parseXML(value: string) {
	const parser = new DOMParser();
	const xmldoc = parser.parseFromString(value, "text/xml");

	const items = xmldoc.getElementsByTagName("item");
	const list = [];

	for (const item of items) {
		const title = item.getElementsByTagName("title")[0].textContent;
		const description =
			item.getElementsByTagName("description")[0].textContent;
		const pubDate = item.getElementsByTagName("pubDate")[0].textContent;
		const url = item.getElementsByTagName("link")[0].textContent;
		const image = description && extractImage(description);

		list.push({ title, pubDate, url, image });
	}

	return list;
}

function extractImage(description: string) {
	const regex = /<img.*?src=["'](.*?)["']/;
	const match = regex.exec(description);
	return match ? match[1] : null;
}

export { parseXML };
