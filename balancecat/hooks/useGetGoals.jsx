/* eslint-disable no-console */
import { useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import dayjs from "dayjs";

const fetcher = (url, token) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((r) => r.data.data.goals);

export default function useGetGoals({ setData, token }) {
  const currentYear = dayjs().year();
  const lastYear = currentYear - 1;
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}goals/?startyear=${lastYear}&endyear=${currentYear}`,
    (url) => fetcher(url, token),
  );
  useEffect(() => {
    if (data) {
      setData(data);
    } else if (error) console.error(error);
  });
}
