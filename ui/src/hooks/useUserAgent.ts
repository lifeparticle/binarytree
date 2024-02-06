export default function useUserAgent() {
	const userAgent = navigator.userAgent.toLowerCase();

	return userAgent.indexOf("win") !== -1 ? "win" : "mac";
}
