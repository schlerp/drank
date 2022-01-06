export default function api<T>(url: string): Promise<T> {
	console.log(url);
	return fetch(url).then((response) => {
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		console.log(response.text());
		return response.json() as Promise<T>;
	});
}
