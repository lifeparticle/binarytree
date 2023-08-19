import { useCallback, useState } from "react";
import { message } from "antd";

const COPY_TEXT_MAX_LENGTH = 50;

const useCopyToClipboard = (timeout = 500) => {
	const [copied, setCopied] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const copyToClipboard = useCallback(
		(text: string) => {
			navigator.clipboard.writeText(text);

			messageApi.open({
				type: "success",
				content:
					text.length <= COPY_TEXT_MAX_LENGTH
						? `Copied: ${text}`
						: "Copied Successfully",
			});

			setCopied(true);

			setTimeout(() => {
				setCopied(false);
			}, timeout);
		},
		[messageApi, timeout]
	);

	return { copied, copyToClipboard, ClipboardMessage: contextHolder };
};

export default useCopyToClipboard;
