const useUserAgent = () => {
	const userAgent = navigator.userAgent.toLowerCase();

	return userAgent.indexOf("win") != -1 ? "win" : "mac";
};

export default useUserAgent;
