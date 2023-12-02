import { useSyncExternalStore } from "react";

function subscribe(callback: () => void): () => void {
	window.addEventListener("online", callback);
	window.addEventListener("offline", callback);
	return () => {
		window.removeEventListener("online", callback);
		window.removeEventListener("offline", callback);
	};
}

export default function useOnlineStatus(): boolean {
	return useSyncExternalStore(
		subscribe,
		() => navigator.onLine, // client
		() => true //  server
	);
}
