import axios from "axios";

export async function getAllNews(query: string) {
	const url = `https://newsapi.org/v2/everything${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

	const response = await axios.get(url);

	return response.data;
}
