async function makeRequest(url: string, method = "GET", data = null) {
	const options = {
		method: method,
		body: data ? JSON.stringify(data) : null,
	};

	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(`HTTP Error: Something went wrong`);
		}

		const contentType = response.headers.get("content-type");
		if (contentType && contentType.includes("application/json")) {
			const responseData = await response.json();
			return responseData;
		} else {
			const responseText = await response.text();
			return responseText;
		}
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		} else {
			throw new Error("Something went wrong");
		}
	}
}

export async function getData(url: string) {
	return makeRequest(url);
}
