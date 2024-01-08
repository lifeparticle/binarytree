export const mockedXMLString = `
    <rss>
    <channel>
        <item>
        <title>Example Title 1</title>
        <description>Example Description 1 &lt;img src="example1.jpg" /&gt;</description>
        <pubDate>Example Date 1</pubDate>
        <link>https://example1.com</link>
        </item>
        <item>
        <title>Example Title 2</title>
        <description>Example Description 2 &lt;img src="example2.jpg" /&gt;</description>
        <pubDate>Example Date 2</pubDate>
        <link>https://example2.com</link>
        </item>
        <item>
        <title>Example Title 3</title>
        <description>Example Description 3 &lt;img src="example3.jpg" /&gt;</description>
        <pubDate>Example Date 3</pubDate>
        <link>https://example3.com</link>
        </item>
        <item>
        <title>Example Title 4</title>
        <description>Example Description 4 &lt;img src="example4.jpg" /&gt;</description>
        <pubDate>Example Date 4</pubDate>
        <link>https://example4.com</link>
        </item>
    </channel>
    </rss>
`;

export const mockedXMLStringMissingDescription = `
    <rss>
    <channel>
        <item>
        <title>Example Title 1</title>
        <pubDate>Example Date 1</pubDate>
        <link>https://example1.com</link>
        </item>
        <item>
        <title>Example Title 2</title>
        <pubDate>Example Date 2</pubDate>
        <link>https://example2.com</link>
        </item>
        <item>
        <title>Example Title 3</title>
        <pubDate>Example Date 3</pubDate>
        <link>https://example3.com</link>
        </item>
        <item>
        <title>Example Title 4</title>
        <pubDate>Example Date 4</pubDate>
        <link>https://example4.com</link>
        </item>
    </channel>
    </rss>
`;

export const mockedParsedXML = [
	{
		title: "Example Title 1",
		pubDate: "Example Date 1",
		url: "https://example1.com",
		image: "example1.jpg",
	},
	{
		title: "Example Title 2",
		pubDate: "Example Date 2",
		url: "https://example2.com",
		image: "example2.jpg",
	},
	{
		title: "Example Title 3",
		pubDate: "Example Date 3",
		url: "https://example3.com",
		image: "example3.jpg",
	},
	{
		title: "Example Title 4",
		pubDate: "Example Date 4",
		url: "https://example4.com",
		image: "example4.jpg",
	},
];

export const mockedReactXMLString = `
    <rss>
    <channel>
        <item>
        <title>Sample Title 1</title>
        <description>Sample Description 1 &lt;img src="sample1.jpg" /&gt;</description>
        <pubDate>Sample Date 1</pubDate>
        <link>https://sample1.com</link>
        </item>
        <item>
        <title>Sample Title 2</title>
        <description>Sample Description 2 &lt;img src="sample2.jpg" /&gt;</description>
        <pubDate>Sample Date 2</pubDate>
        <link>https://sample2.com</link>
        </item>
        <item>
        <title>Sample Title 3</title>
        <description>Sample Description 3 &lt;img src="sample3.jpg" /&gt;</description>
        <pubDate>Sample Date 3</pubDate>
        <link>https://sample3.com</link>
        </item>
        <item>
        <title>Sample Title 4</title>
        <description>Sample Description 4 &lt;img src="sample4.jpg" /&gt;</description>
        <pubDate>Sample Date 4</pubDate>
        <link>https://sample4.com</link>
        </item>
    </channel>
    </rss>
`;

export const mockedParsedReactXML = [
	{
		title: "Sample Title 1",
		pubDate: "Sample Date 1",
		url: "https://sample1.com",
		image: "sample1.jpg",
	},
	{
		title: "Sample Title 2",
		pubDate: "Sample Date 2",
		url: "https://sample2.com",
		image: "sample2.jpg",
	},
	{
		title: "Sample Title 3",
		pubDate: "Sample Date 3",
		url: "https://sample3.com",
		image: "sample3.jpg",
	},
	{
		title: "Sample Title 4",
		pubDate: "Sample Date 4",
		url: "https://sample4.com",
		image: "sample4.jpg",
	},
];
