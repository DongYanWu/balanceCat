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
    .then((r) => r.data.data.subjects);

export default function useGetFinancialData({ setData, date, token }) {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}fs?${date.format("YYYY-MM")}-01`,
    (url) => fetcher(url, token),
  );
  useEffect(() => {
    if (data) {
      setData(data);
    } else if (error) console.error(error);
  });
}
