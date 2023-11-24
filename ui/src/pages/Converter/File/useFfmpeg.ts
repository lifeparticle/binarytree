import { toBlobURL } from "@ffmpeg/util";
import { useEffect, useRef, useState } from "react";
import { FFmpeg } from "@ffmpeg/ffmpeg";

export const useFfmpeg = () => {
	const [loaded, setLoaded] = useState(false);
	const messageRef = useRef<HTMLParagraphElement | null>(null);
	const ffmpegRef = useRef(new FFmpeg());

	const load = async () => {
		const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.4/dist/esm";
		const ffmpeg = ffmpegRef.current;
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
		setLoaded(true);
	};

	useEffect(() => {
		load();
	}, [loaded]);

	return { loaded, ffmpegRef };
};
