// const toc = require("markdown-toc");
//
import toc from "markdown-toc";

export const getTOC = (fileContent : any) => {
  return toc(fileContent).content
};

// export const abcd = {}