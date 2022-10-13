export const call = async (url: string, headers?: object) => {
  let response: any = await fetch(url, headers);

  try {
    response = await response.arrayBuffer();
  } catch (ex) {
    console.log(ex);
  }

  return response;
};

export const httpGetMarkedDownText = async (url: string, headers?: object) => {
  return await call(url, headers);
};