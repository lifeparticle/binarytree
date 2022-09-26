import { faker } from "@faker-js/faker";

export const SQL_DATA_TYPES = [
	{ value: "TEXT", label: "String" },
	{ value: "INT", label: "Integer" },
];

export const FAKER_DATA_TYPES = [
	{
		value: "buildingNumber",
		label: "Building Number",
		method: () => {
			return faker.address.buildingNumber();
		},
	},
	{
		value: "cardinalDirection",
		label: "Cardinal Direction",
		method: () => {
			return faker.address.cardinalDirection();
		},
	},
	{
		value: "addressCity",
		label: "City",
		method: () => {
			return faker.address.city();
		},
	},
	{
		value: "cityName",
		label: "City Name",
		method: () => {
			return faker.address.cityName();
		},
	},
	{
		value: "country",
		label: "Country",
		method: () => {
			return faker.address.country();
		},
	},
	{
		value: "countryCode",
		label: "Country Code",
		method: () => {
			return faker.address.countryCode();
		},
	},
	{
		value: "county",
		label: "County",
		method: () => {
			return faker.address.county();
		},
	},

	{
		value: "direction",
		label: "Direction",
		method: () => {
			return faker.address.direction();
		},
	},
	{
		value: "latitude",
		label: "Latitude",
		method: () => {
			return faker.address.latitude();
		},
	},
	{
		value: "longitude",
		label: "Longitude",
		method: () => {
			return faker.address.longitude();
		},
	},
	{
		value: "nearbyGPSCoordinate",
		label: "Nearby G P S Coordinate",
		method: () => {
			return faker.address.nearbyGPSCoordinate();
		},
	},
	{
		value: "ordinalDirection",
		label: "Ordinal Direction",
		method: () => {
			return faker.address.ordinalDirection();
		},
	},
	{
		value: "secondaryAddress",
		label: "Secondary Address",
		method: () => {
			return faker.address.secondaryAddress();
		},
	},
	{
		value: "state",
		label: "State",
		method: () => {
			return faker.address.state();
		},
	},
	{
		value: "stateAbbr",
		label: "State Abbr",
		method: () => {
			return faker.address.stateAbbr();
		},
	},
	{
		value: "street",
		label: "Street",
		method: () => {
			return faker.address.street();
		},
	},
	{
		value: "streetAddress",
		label: "Street Address",
		method: () => {
			return faker.address.streetAddress();
		},
	},
	{
		value: "streetName",
		label: "Street Name",
		method: () => {
			return faker.address.streetName();
		},
	},
	{
		value: "streetPrefix",
		label: "Street Prefix",
		method: () => {
			return faker.address.streetPrefix();
		},
	},
	{
		value: "streetSuffix",
		label: "Street Suffix",
		method: () => {
			return faker.address.streetSuffix();
		},
	},
	{
		value: "timeZone",
		label: "Time Zone",
		method: () => {
			return faker.address.timeZone();
		},
	},
	{
		value: "zipCode",
		label: "Zip Code",
		method: () => {
			return faker.address.zipCode();
		},
	},
	{
		value: "zipCodeByState",
		label: "Zip Code By State",
		method: () => {
			return faker.address.zipCodeByState("####");
		},
	},
	{
		value: "bear",
		label: "Bear",
		method: () => {
			return faker.animal.bear();
		},
	},
	{
		value: "bird",
		label: "Bird",
		method: () => {
			return faker.animal.bird();
		},
	},
	{
		value: "cat",
		label: "Cat",
		method: () => {
			return faker.animal.cat();
		},
	},
	{
		value: "cetacean",
		label: "Cetacean",
		method: () => {
			return faker.animal.cetacean();
		},
	},
	{
		value: "cow",
		label: "Cow",
		method: () => {
			return faker.animal.cow();
		},
	},
	{
		value: "crocodilia",
		label: "Crocodilia",
		method: () => {
			return faker.animal.crocodilia();
		},
	},
	{
		value: "dog",
		label: "Dog",
		method: () => {
			return faker.animal.dog();
		},
	},
	{
		value: "fish",
		label: "Fish",
		method: () => {
			return faker.animal.fish();
		},
	},
	{
		value: "horse",
		label: "Horse",
		method: () => {
			return faker.animal.horse();
		},
	},
	{
		value: "insect",
		label: "Insect",
		method: () => {
			return faker.animal.insect();
		},
	},

	{
		value: "lion",
		label: "Lion",
		method: () => {
			return faker.animal.lion();
		},
	},
	{
		value: "rabbit",
		label: "Rabbit",
		method: () => {
			return faker.animal.rabbit();
		},
	},
	{
		value: "rodent",
		label: "Rodent",
		method: () => {
			return faker.animal.rodent();
		},
	},
	{
		value: "snake",
		label: "Snake",
		method: () => {
			return faker.animal.snake();
		},
	},
	{
		value: "type",
		label: "Type",
		method: () => {
			return faker.animal.type();
		},
	},
	{
		value: "cmyk",
		label: "Cmyk",
		method: () => {
			return faker.color.cmyk();
		},
	},
	{
		value: "colorByCSSColorSpace",
		label: "Color By CSS Color Space",
		method: () => {
			return faker.color.colorByCSSColorSpace();
		},
	},
	{
		value: "cssSupportedFunction",
		label: "Css Supported Function",
		method: () => {
			return faker.color.cssSupportedFunction();
		},
	},
	{
		value: "cssSupportedSpace",
		label: "Css Supported Space",
		method: () => {
			return faker.color.cssSupportedSpace();
		},
	},
	{
		value: "hsl",
		label: "Hsl",
		method: () => {
			return faker.color.hsl();
		},
	},
	{
		value: "human",
		label: "Human",
		method: () => {
			return faker.color.human();
		},
	},
	{
		value: "hwb",
		label: "Hwb",
		method: () => {
			return faker.color.hwb();
		},
	},
	{
		value: "lab",
		label: "Lab",
		method: () => {
			return faker.color.lab();
		},
	},
	{
		value: "lch",
		label: "Lch",
		method: () => {
			return faker.color.lch();
		},
	},
	{
		value: "rgb",
		label: "Rgb",
		method: () => {
			return faker.color.rgb();
		},
	},
	{
		value: "space",
		label: "Space",
		method: () => {
			return faker.color.space();
		},
	},
	{
		value: "color",
		label: "Color",
		method: () => {
			return faker.commerce.color();
		},
	},
	{
		value: "department",
		label: "Department",
		method: () => {
			return faker.commerce.department();
		},
	},
	{
		value: "price",
		label: "Price",
		method: () => {
			return faker.commerce.price();
		},
	},
	{
		value: "product",
		label: "Product",
		method: () => {
			return faker.commerce.product();
		},
	},
	{
		value: "productAdjective",
		label: "Product Adjective",
		method: () => {
			return faker.commerce.productAdjective();
		},
	},
	{
		value: "productDescription",
		label: "Product Description",
		method: () => {
			return faker.commerce.productDescription();
		},
	},
	{
		value: "productMaterial",
		label: "Product Material",
		method: () => {
			return faker.commerce.productMaterial();
		},
	},
	{
		value: "productName",
		label: "Product Name",
		method: () => {
			return faker.commerce.productName();
		},
	},
	{
		value: "bs",
		label: "Bs",
		method: () => {
			return faker.company.bs();
		},
	},
	{
		value: "bsAdjective",
		label: "Bs Adjective",
		method: () => {
			return faker.company.bsAdjective();
		},
	},
	{
		value: "bsBuzz",
		label: "Bs Buzz",
		method: () => {
			return faker.company.bsBuzz();
		},
	},
	{
		value: "bsNoun",
		label: "Bs Noun",
		method: () => {
			return faker.company.bsNoun();
		},
	},
	{
		value: "catchPhrase",
		label: "Catch Phrase",
		method: () => {
			return faker.company.catchPhrase();
		},
	},
	{
		value: "catchPhraseAdjective",
		label: "Catch Phrase Adjective",
		method: () => {
			return faker.company.catchPhraseAdjective();
		},
	},
	{
		value: "catchPhraseDescriptor",
		label: "Catch Phrase Descriptor",
		method: () => {
			return faker.company.catchPhraseDescriptor();
		},
	},
	{
		value: "catchPhraseNoun",
		label: "Catch Phrase Noun",
		method: () => {
			return faker.company.catchPhraseNoun();
		},
	},

	{
		value: "companyName",
		label: "Company Name",
		method: () => {
			return faker.company.companyName();
		},
	},
	{
		value: "companySuffix",
		label: "Company Suffix",
		method: () => {
			return faker.company.companySuffix();
		},
	},
	{
		value: "name",
		label: "Name",
		method: () => {
			return faker.company.name();
		},
	},
	{
		value: "suffixes",
		label: "Suffixes",
		method: () => {
			return faker.company.suffixes();
		},
	},
	{
		value: "collation",
		label: "Collation",
		method: () => {
			return faker.database.collation();
		},
	},
	{
		value: "column",
		label: "Column",
		method: () => {
			return faker.database.column();
		},
	},
	{
		value: "engine",
		label: "Engine",
		method: () => {
			return faker.database.engine();
		},
	},
	{
		value: "mongodbObjectId",
		label: "Mongodb Object Id",
		method: () => {
			return faker.database.mongodbObjectId();
		},
	},
	{
		value: "type",
		label: "Type",
		method: () => {
			return faker.database.type();
		},
	},
	{
		value: "array",
		label: "Array",
		method: () => {
			return faker.datatype.array();
		},
	},
	{
		value: "bigInt",
		label: "Big Int",
		method: () => {
			return faker.datatype.bigInt();
		},
	},

	{
		value: "boolean",
		label: "Boolean",
		method: () => {
			return faker.datatype.boolean();
		},
	},
	{
		value: "datetime",
		label: "Datetime",
		method: () => {
			return faker.datatype.datetime();
		},
	},
	{
		value: "float",
		label: "Float",
		method: () => {
			return faker.datatype.float();
		},
	},
	{
		value: "hexadecimal",
		label: "Hexadecimal",
		method: () => {
			return faker.datatype.hexadecimal();
		},
	},
	{
		value: "json",
		label: "Json",
		method: () => {
			return faker.datatype.json();
		},
	},
	{
		value: "number",
		label: "Number",
		method: () => {
			return faker.datatype.number();
		},
	},
	{
		value: "string",
		label: "String",
		method: () => {
			return faker.datatype.string();
		},
	},
	{
		value: "uuid",
		label: "Uuid",
		method: () => {
			return faker.datatype.uuid();
		},
	},
	{
		value: "between",
		label: "Between",
		method: () => {
			return faker.date.between(
				"2020-01-01T00:00:00.000Z",
				"2030-01-01T00:00:00.000Z"
			);
		},
	},
	{
		value: "betweens",
		label: "Betweens",
		method: () => {
			return faker.date.betweens(
				"2020-01-01T00:00:00.000Z",
				"2030-01-01T00:00:00.000Z",
				1
			);
		},
	},
	{
		value: "birthdate",
		label: "Birthdate",
		method: () => {
			return faker.date.birthdate();
		},
	},
	{
		value: "future",
		label: "Future",
		method: () => {
			return faker.date.future();
		},
	},
	{
		value: "month",
		label: "Month",
		method: () => {
			return faker.date.month();
		},
	},
	{
		value: "past",
		label: "Past",
		method: () => {
			return faker.date.past();
		},
	},
	{
		value: "recent",
		label: "Recent",
		method: () => {
			return faker.date.recent();
		},
	},
	{
		value: "soon",
		label: "Soon",
		method: () => {
			return faker.date.soon();
		},
	},
	{
		value: "weekday",
		label: "Weekday",
		method: () => {
			return faker.date.weekday();
		},
	},
	{
		value: "account",
		label: "Account",
		method: () => {
			return faker.finance.account();
		},
	},
	{
		value: "accountName",
		label: "Account Name",
		method: () => {
			return faker.finance.accountName();
		},
	},
	{
		value: "amount",
		label: "Amount",
		method: () => {
			return faker.finance.amount();
		},
	},
	{
		value: "bic",
		label: "Bic",
		method: () => {
			return faker.finance.bic();
		},
	},
	{
		value: "bitcoinAddress",
		label: "Bitcoin Address",
		method: () => {
			return faker.finance.bitcoinAddress();
		},
	},
	{
		value: "creditCardCVV",
		label: "Credit Card C V V",
		method: () => {
			return faker.finance.creditCardCVV();
		},
	},
	{
		value: "creditCardIssuer",
		label: "Credit Card Issuer",
		method: () => {
			return faker.finance.creditCardIssuer();
		},
	},
	{
		value: "creditCardNumber",
		label: "Credit Card Number",
		method: () => {
			return faker.finance.creditCardNumber();
		},
	},
	{
		value: "currencyCode",
		label: "Currency Code",
		method: () => {
			return faker.finance.currencyCode();
		},
	},
	{
		value: "currencyName",
		label: "Currency Name",
		method: () => {
			return faker.finance.currencyName();
		},
	},
	{
		value: "currencySymbol",
		label: "Currency Symbol",
		method: () => {
			return faker.finance.currencySymbol();
		},
	},
	{
		value: "ethereumAddress",
		label: "Ethereum Address",
		method: () => {
			return faker.finance.ethereumAddress();
		},
	},
	{
		value: "iban",
		label: "Iban",
		method: () => {
			return faker.finance.iban();
		},
	},
	{
		value: "litecoinAddress",
		label: "Litecoin Address",
		method: () => {
			return faker.finance.litecoinAddress();
		},
	},
	{
		value: "mask",
		label: "Mask",
		method: () => {
			return faker.finance.mask();
		},
	},
	{
		value: "pin",
		label: "Pin",
		method: () => {
			return faker.finance.pin();
		},
	},
	{
		value: "routingNumber",
		label: "Routing Number",
		method: () => {
			return faker.finance.routingNumber();
		},
	},
	{
		value: "transactionDescription",
		label: "Transaction Description",
		method: () => {
			return faker.finance.transactionDescription();
		},
	},
	{
		value: "transactionType",
		label: "Transaction Type",
		method: () => {
			return faker.finance.transactionType();
		},
	},
	{
		value: "branch",
		label: "Branch",
		method: () => {
			return faker.git.branch();
		},
	},
	{
		value: "commitEntry",
		label: "Commit Entry",
		method: () => {
			return faker.git.commitEntry();
		},
	},
	{
		value: "commitMessage",
		label: "Commit Message",
		method: () => {
			return faker.git.commitMessage();
		},
	},
	{
		value: "commitSha",
		label: "Commit Sha",
		method: () => {
			return faker.git.commitSha();
		},
	},
	{
		value: "shortSha",
		label: "Short Sha",
		method: () => {
			return faker.git.shortSha();
		},
	},
	{
		value: "abbreviation",
		label: "Abbreviation",
		method: () => {
			return faker.hacker.abbreviation();
		},
	},
	{
		value: "adjective",
		label: "Adjective",
		method: () => {
			return faker.hacker.adjective();
		},
	},
	{
		value: "ingverb",
		label: "Ingverb",
		method: () => {
			return faker.hacker.ingverb();
		},
	},
	{
		value: "noun",
		label: "Noun",
		method: () => {
			return faker.hacker.noun();
		},
	},
	{
		value: "phrase",
		label: "Phrase",
		method: () => {
			return faker.hacker.phrase();
		},
	},
	{
		value: "verb",
		label: "Verb",
		method: () => {
			return faker.hacker.verb();
		},
	},
	{
		value: "arrayElement",
		label: "Array Element",
		method: () => {
			return faker.helpers.arrayElement();
		},
	},
	{
		value: "arrayElements",
		label: "Array Elements",
		method: () => {
			return faker.helpers.arrayElements();
		},
	},
	{
		value: "maybe",
		label: "Maybe",
		method: () => {
			return faker.helpers.maybe(() => "Hello World!");
		},
	},
	{
		value: "mustache",
		label: "Mustache",
		method: () => {
			return faker.helpers.mustache(
				'I found {{count}} instances of "{{word}}".',
				{
					count: () => `${faker.datatype.number()}`,
					word: "this word",
				}
			);
		},
	},
	{
		value: "objectKey",
		label: "Object Key",
		method: () => {
			return faker.helpers.objectKey({ myProperty: "myValue" });
		},
	},
	{
		value: "objectValue",
		label: "Object Value",
		method: () => {
			return faker.helpers.objectValue({ myProperty: "myValue" });
		},
	},
	{
		value: "regexpStyleStringParse",
		label: "Regexp Style String Parse",
		method: () => {
			return faker.helpers.regexpStyleStringParse();
		},
	},
	{
		value: "replaceCreditCardSymbols",
		label: "Replace Credit Card Symbols",
		method: () => {
			return faker.helpers.replaceCreditCardSymbols();
		},
	},
	{
		value: "replaceSymbolWithNumber",
		label: "Replace Symbol With Number",
		method: () => {
			return faker.helpers.replaceSymbolWithNumber();
		},
	},
	{
		value: "replaceSymbols",
		label: "Replace Symbols",
		method: () => {
			return faker.helpers.replaceSymbols();
		},
	},
	{
		value: "shuffle",
		label: "Shuffle",
		method: () => {
			return faker.helpers.shuffle();
		},
	},
	{
		value: "slugify",
		label: "Slugify",
		method: () => {
			return faker.helpers.slugify();
		},
	},
	{
		value: "uniqueArray",
		label: "Unique Array",
		method: () => {
			return faker.helpers.uniqueArray(faker.random.word, 50);
		},
	},
	{
		value: "abstract",
		label: "Abstract",
		method: () => {
			return faker.image.abstract();
		},
	},
	{
		value: "animals",
		label: "Animals",
		method: () => {
			return faker.image.animals();
		},
	},
	{
		value: "avatar",
		label: "Avatar",
		method: () => {
			return faker.image.avatar();
		},
	},
	{
		value: "business",
		label: "Business",
		method: () => {
			return faker.image.business();
		},
	},
	{
		value: "cats",
		label: "Cats",
		method: () => {
			return faker.image.cats();
		},
	},

	{
		value: "imageCity",
		label: "City",
		method: () => {
			return faker.image.city();
		},
	},
	{
		value: "dataUri",
		label: "Data Uri",
		method: () => {
			return faker.image.dataUri();
		},
	},
	{
		value: "fashion",
		label: "Fashion",
		method: () => {
			return faker.image.fashion();
		},
	},
	{
		value: "food",
		label: "Food",
		method: () => {
			return faker.image.food();
		},
	},
	{
		value: "image",
		label: "Image",
		method: () => {
			return faker.image.image();
		},
	},
	{
		value: "imageUrl",
		label: "Image Url",
		method: () => {
			return faker.image.imageUrl();
		},
	},
	{
		value: "nature",
		label: "Nature",
		method: () => {
			return faker.image.nature();
		},
	},
	{
		value: "nightlife",
		label: "Nightlife",
		method: () => {
			return faker.image.nightlife();
		},
	},
	{
		value: "people",
		label: "People",
		method: () => {
			return faker.image.people();
		},
	},
	{
		value: "sports",
		label: "Sports",
		method: () => {
			return faker.image.sports();
		},
	},
	{
		value: "technics",
		label: "Technics",
		method: () => {
			return faker.image.technics();
		},
	},
	{
		value: "transport",
		label: "Transport",
		method: () => {
			return faker.image.transport();
		},
	},
	{
		value: "avatar",
		label: "Avatar",
		method: () => {
			return faker.image.avatar();
		},
	},
	{
		value: "color",
		label: "Color",
		method: () => {
			return faker.internet.color();
		},
	},
	{
		value: "domainName",
		label: "Domain Name",
		method: () => {
			return faker.internet.domainName();
		},
	},
	{
		value: "domainSuffix",
		label: "Domain Suffix",
		method: () => {
			return faker.internet.domainSuffix();
		},
	},
	{
		value: "domainWord",
		label: "Domain Word",
		method: () => {
			return faker.internet.domainWord();
		},
	},
	{
		value: "email",
		label: "Email",
		method: () => {
			return faker.internet.email();
		},
	},
	{
		value: "emoji",
		label: "Emoji",
		method: () => {
			return faker.internet.emoji();
		},
	},
	{
		value: "exampleEmail",
		label: "Example Email",
		method: () => {
			return faker.internet.exampleEmail();
		},
	},
	{
		value: "httpMethod",
		label: "Http Method",
		method: () => {
			return faker.internet.httpMethod();
		},
	},
	{
		value: "httpStatusCode",
		label: "Http Status Code",
		method: () => {
			return faker.internet.httpStatusCode();
		},
	},
	{
		value: "ip",
		label: "Ip",
		method: () => {
			return faker.internet.ip();
		},
	},
	{
		value: "ipv4",
		label: "Ipv4",
		method: () => {
			return faker.internet.ipv4();
		},
	},
	{
		value: "ipv6",
		label: "Ipv6",
		method: () => {
			return faker.internet.ipv6();
		},
	},
	{
		value: "mac",
		label: "Mac",
		method: () => {
			return faker.internet.mac();
		},
	},
	{
		value: "password",
		label: "Password",
		method: () => {
			return faker.internet.password();
		},
	},
	{
		value: "port",
		label: "Port",
		method: () => {
			return faker.internet.port();
		},
	},
	{
		value: "protocol",
		label: "Protocol",
		method: () => {
			return faker.internet.protocol();
		},
	},
	{
		value: "url",
		label: "Url",
		method: () => {
			return faker.internet.url();
		},
	},
	{
		value: "userAgent",
		label: "User Agent",
		method: () => {
			return faker.internet.userAgent();
		},
	},
	{
		value: "userName",
		label: "User Name",
		method: () => {
			return faker.internet.userName();
		},
	},
	{
		value: "lines",
		label: "Lines",
		method: () => {
			return faker.lorem.lines();
		},
	},

	{
		value: "paragraph",
		label: "Paragraph",
		method: () => {
			return faker.lorem.paragraph();
		},
	},

	{
		value: "paragraphs",
		label: "Paragraphs",
		method: () => {
			return faker.lorem.paragraphs();
		},
	},
	{
		value: "sentence",
		label: "Sentence",
		method: () => {
			return faker.lorem.sentence();
		},
	},
	{
		value: "sentences",
		label: "Sentences",
		method: () => {
			return faker.lorem.sentences();
		},
	},
	{
		value: "slug",
		label: "Slug",
		method: () => {
			return faker.lorem.slug();
		},
	},
	{
		value: "text",
		label: "Text",
		method: () => {
			return faker.lorem.text();
		},
	},
	{
		value: "word",
		label: "Word",
		method: () => {
			return faker.lorem.word();
		},
	},
	{
		value: "words",
		label: "Words",
		method: () => {
			return faker.lorem.words();
		},
	},
	{
		value: "rand",
		label: "Rand",
		method: () => {
			return faker.mersenne.rand();
		},
	},
	{
		value: "seed",
		label: "Seed",
		method: () => {
			return faker.mersenne.seed(faker.mersenne.rand());
		},
	},
	{
		value: "seed_array",
		label: "Seed_array",
		method: () => {
			return faker.mersenne.seed_array([]);
		},
	},
	{
		value: "genre",
		label: "Genre",
		method: () => {
			return faker.music.genre();
		},
	},
	{
		value: "songName",
		label: "Song Name",
		method: () => {
			return faker.music.songName();
		},
	},
	{
		value: "findName",
		label: "Find Name",
		method: () => {
			return faker.name.findName();
		},
	},
	{
		value: "firstName",
		label: "First Name",
		method: () => {
			return faker.name.firstName();
		},
	},
	{
		value: "fullName",
		label: "Full Name",
		method: () => {
			return faker.name.fullName();
		},
	},
	{
		value: "gender",
		label: "Gender",
		method: () => {
			return faker.name.gender();
		},
	},
	{
		value: "jobArea",
		label: "Job Area",
		method: () => {
			return faker.name.jobArea();
		},
	},
	{
		value: "jobDescriptor",
		label: "Job Descriptor",
		method: () => {
			return faker.name.jobDescriptor();
		},
	},
	{
		value: "jobTitle",
		label: "Job Title",
		method: () => {
			return faker.name.jobTitle();
		},
	},
	{
		value: "jobType",
		label: "Job Type",
		method: () => {
			return faker.name.jobType();
		},
	},
	{
		value: "lastName",
		label: "Last Name",
		method: () => {
			return faker.name.lastName();
		},
	},
	{
		value: "middleName",
		label: "Middle Name",
		method: () => {
			return faker.name.middleName();
		},
	},
	{
		value: "prefix",
		label: "Prefix",
		method: () => {
			return faker.name.prefix();
		},
	},
	{
		value: "sex",
		label: "Sex",
		method: () => {
			return faker.name.sex();
		},
	},
	{
		value: "sexType",
		label: "Sex Type",
		method: () => {
			return faker.name.sexType();
		},
	},
	{
		value: "suffix",
		label: "Suffix",
		method: () => {
			return faker.name.suffix();
		},
	},

	{
		value: "imei",
		label: "Imei",
		method: () => {
			return faker.phone.imei();
		},
	},
	{
		value: "number",
		label: "Number",
		method: () => {
			return faker.phone.number();
		},
	},
	{
		value: "phoneFormats",
		label: "Phone Formats",
		method: () => {
			return faker.phone.phoneFormats();
		},
	},
	{
		value: "phoneNumber",
		label: "Phone Number",
		method: () => {
			return faker.phone.phoneNumber();
		},
	},
	{
		value: "phoneNumberFormat",
		label: "Phone Number Format",
		method: () => {
			return faker.phone.phoneNumberFormat();
		},
	},
	{
		value: "alpha",
		label: "Alpha",
		method: () => {
			return faker.random.alpha();
		},
	},

	{
		value: "alphaNumeric",
		label: "Alpha Numeric",
		method: () => {
			return faker.random.alphaNumeric();
		},
	},

	{
		value: "locale",
		label: "Locale",
		method: () => {
			return faker.random.locale();
		},
	},
	{
		value: "numeric",
		label: "Numeric",
		method: () => {
			return faker.random.numeric();
		},
	},
	{
		value: "word",
		label: "Word",
		method: () => {
			return faker.random.word();
		},
	},
	{
		value: "words",
		label: "Words",
		method: () => {
			return faker.random.words();
		},
	},
	{
		value: "chemicalElement",
		label: "Chemical Element",
		method: () => {
			return faker.science.chemicalElement();
		},
	},
	{
		value: "unit",
		label: "Unit",
		method: () => {
			return faker.science.unit();
		},
	},
	{
		value: "commonFileExt",
		label: "Common File Ext",
		method: () => {
			return faker.system.commonFileExt();
		},
	},

	{
		value: "commonFileName",
		label: "Common File Name",
		method: () => {
			return faker.system.commonFileName();
		},
	},
	{
		value: "commonFileType",
		label: "Common File Type",
		method: () => {
			return faker.system.commonFileType();
		},
	},
	{
		value: "cron",
		label: "Cron",
		method: () => {
			return faker.system.cron();
		},
	},

	{
		value: "directoryPath",
		label: "Directory Path",
		method: () => {
			return faker.system.directoryPath();
		},
	},
	{
		value: "fileExt",
		label: "File Ext",
		method: () => {
			return faker.system.fileExt();
		},
	},
	{
		value: "fileName",
		label: "File Name",
		method: () => {
			return faker.system.fileName();
		},
	},
	{
		value: "filePath",
		label: "File Path",
		method: () => {
			return faker.system.filePath();
		},
	},
	{
		value: "fileType",
		label: "File Type",
		method: () => {
			return faker.system.fileType();
		},
	},

	{
		value: "mimeType",
		label: "Mime Type",
		method: () => {
			return faker.system.mimeType();
		},
	},

	{
		value: "networkInterface",
		label: "Network Interface",
		method: () => {
			return faker.system.networkInterface();
		},
	},

	{
		value: "semver",
		label: "Semver",
		method: () => {
			return faker.system.semver();
		},
	},

	{
		value: "bicycle",
		label: "Bicycle",
		method: () => {
			return faker.vehicle.bicycle();
		},
	},
	{
		value: "color",
		label: "Color",
		method: () => {
			return faker.vehicle.color();
		},
	},
	{
		value: "fuel",
		label: "Fuel",
		method: () => {
			return faker.vehicle.fuel();
		},
	},
	{
		value: "manufacturer",
		label: "Manufacturer",
		method: () => {
			return faker.vehicle.manufacturer();
		},
	},
	{
		value: "model",
		label: "Model",
		method: () => {
			return faker.vehicle.model();
		},
	},
	{
		value: "type",
		label: "Type",
		method: () => {
			return faker.vehicle.type();
		},
	},
	{
		value: "vehicle",
		label: "Vehicle",
		method: () => {
			return faker.vehicle.vehicle();
		},
	},
	{
		value: "vin",
		label: "Vin",
		method: () => {
			return faker.vehicle.vin();
		},
	},
	{
		value: "vrm",
		label: "Vrm",
		method: () => {
			return faker.vehicle.vrm();
		},
	},
	{
		value: "adjective",
		label: "Adjective",
		method: () => {
			return faker.word.adjective();
		},
	},
	{
		value: "adverb",
		label: "Adverb",
		method: () => {
			return faker.word.adverb();
		},
	},
	{
		value: "conjunction",
		label: "Conjunction",
		method: () => {
			return faker.word.conjunction();
		},
	},
	{
		value: "interjection",
		label: "Interjection",
		method: () => {
			return faker.word.interjection();
		},
	},
	{
		value: "noun",
		label: "Noun",
		method: () => {
			return faker.word.noun();
		},
	},
	{
		value: "preposition",
		label: "Preposition",
		method: () => {
			return faker.word.preposition();
		},
	},
	{
		value: "verb",
		label: "Verb",
		method: () => {
			return faker.word.verb();
		},
	},
];
