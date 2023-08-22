const FetchWithToken = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((r) => r.json());

export default FetchWithToken;
