import { toBlobURL } from "@ffmpeg/util";
import { useEffect, useReducer, useRef } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";

let loaded = false;
const ffmpeg = new FFmpeg();

export const useFfmpeg = () => {
	// const [loaded, setLoaded] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, rerender] = useReducer((s) => s + 1, 0);
	const messageRef = useRef<HTMLParagraphElement | null>(null);
	// const ffmpegRef = useRef(new FFmpeg());

	const load = async () => {
		if (loaded) {
			return;
		}
		const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.4/dist/esm";
		// const ffmpeg = ffmpegRef.current;
		ffmpeg.on("log", ({ message }) => {
			if (messageRef.current) messageRef.current.innerHTML = message;
		});

		await ffmpeg.load({
			coreURL: await toBlobURL(
				`${baseURL}/ffmpeg-core.js`,
				"text/javascript"
			),
			wasmURL: await toBlobURL(
				`${baseURL}/ffmpeg-core.wasm`,
				"application/wasm"
			),
			workerURL: await toBlobURL(
				`${baseURL}/ffmpeg-core.worker.js`,
				"text/javascript"
			),
		});
		loaded = true;
		// setLoaded(true);
		rerender();
	};

	useEffect(() => {
		load();
	}, []);

	return { loaded, ffmpeg };
};
