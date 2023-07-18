// api.js

const API_BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY =
	process.env.REACT_APP_NEWS_API_KEY || "512459ed954d4cf3b2259232ef23410c"; // demo purpose

async function makeApiRequest(endpoint: string, method = "GET", data = null) {
	const url = `${API_BASE_URL}/${endpoint}&apiKey=${API_KEY}`;

	const options = {
		method: method,
		body: data ? JSON.stringify(data) : null,
	};

	try {
		const response = await fetch(url, options);
		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message);
		}

		return responseData;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("Something went wrong");
		}
	}
}

export async function getData(endpoint: string) {
	return makeApiRequest(endpoint);
}

export async function createData(endpoint: string, data: any) {
	return makeApiRequest(endpoint, "POST", data);
}

export async function updateData(endpoint: string, updateData: any) {
	return makeApiRequest(endpoint, "PUT", updateData);
}

export async function deleteData(endpoint: string) {
	return makeApiRequest(endpoint, "DELETE");
}
