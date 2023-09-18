function parseXML(value: string) {
	const parser = new DOMParser();
	const xmldoc = parser.parseFromString(value, "text/xml");

	const items = xmldoc.getElementsByTagName("item");
	const list = [];

	for (let i = 0; i < items.length; i++) {
		const item = items[i];

		// Extract data from the 'item' element
		const title = item.getElementsByTagName("title")[0].textContent;
		const description = parser.parseFromString(
			item.getElementsByTagName("description")[0].textContent!,
			"text/html"
		);
		const image = description?.getElementsByTagName("img")?.[0]?.src;
		const pubDate = item.getElementsByTagName("pubDate")[0].textContent;
		const url = item.getElementsByTagName("link")[0].textContent;

		list.push({ title, pubDate, url, image });
	}

	return list;
}

export { parseXML };
