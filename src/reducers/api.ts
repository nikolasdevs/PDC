export const url = "http://localhost:4002/api/v1";

export const setHeaders: any = () => {
  const headers = {
    headers: {
      "Bearer": localStorage.getItem("token"),
    },
  };

  return headers;
};
