import { useCallback, useState } from "react";
import { message } from "antd";

const useCopyToClipboard = (timeout = 500) => {
	const [copied, setCopied] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const copyToClipboard = useCallback(
		(text: string) => {
			navigator.clipboard.writeText(text);

			messageApi.open({
				type: "success",
				content: `Copied: ${text} 👍`,
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
