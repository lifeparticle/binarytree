// types
import { MimeTableDataType } from "pages/Information/Mimetype/types";

export const mockItems: MimeTableDataType[] = [
    {
        name: ".aac",
        example: "AAC audio",
        code: { "content-type": "audio/aac" }
    },
    {
        name: ".abw",
        example: "AbiWord document",
        code: { "content-type": "application/x-abiword" }
    },
    {
        name: ".arc",
        example: "Archive document (multiple files embedded)",
        code: { "content-type": "application/x-freearc" }
    },
];