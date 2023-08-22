/* eslint-disable no-console */
import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url, token) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data.data.entries);

export default function useGetEntryHistory({
  setData,
  startDate,
  endDate,
  token,
  subject_id,
}) {
  const { data, error } = useSWR(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }entries/history?subject_id=${subject_id}&start=${startDate.format(
      "YYYY-MM-DD",
    )}&end=${endDate.format("YYYY-MM-DD")}`,
    (url) => fetcher(url, token),
  );
  useEffect(() => {
    if (data) {
      setData(data);
    } else if (error) console.error(error);
  });
}
