async function makeRequest(url: string, method = "GET", data = null) {
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

export async function getData(url: string) {
	return makeRequest(url);
}
