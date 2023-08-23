import Avatar from "@mui/material/Avatar";
import React from "react";
// import YearPicker from "@/components/YearPicker";
import Cookies from "cookies";
import useSWR, { mutate as globalMutate } from "swr";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import DataCard from "@/components/userpage/DataCard";
import SideBar from "@/components/SideBar";
import SwitchBar from "@/components/userpage/SwitchBar";
import PlanCard from "@/components/userpage/PlanCard";
import Sun from "@/components/Sun";
import FetchWithToken from "@/components/fetchWithToken";
import styles from "../../styles/userpage.module.scss";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function UserPage({ token, userId, username }) {
  const {
    data,
    // eslint-disable-next-line no-unused-vars
    error,
    mutate,
    // eslint-disable-next-line no-shadow
  } = useSWR([`${API_URL}users`, token], ([url, token]) =>
    FetchWithToken(url, token),
  );
  const refreshFriendData = () => {
    mutate([`${API_URL}users`, token]);
  };

  const loading = !data && !error;
  console.log(data?.data?.user);
  if (loading) return <div>loading...</div>;
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0f0f15",
      }}
    >
      <Sun />
      <CardTemplate
        style={{
          display: "flex",
          background: "linear-gradient(to bottom right, #fff, #acb5c2)",
          boxShadow: "0 0 40px rgba(255, 255, 255, 1)",
          border: "none",
        }}
      >
        <SideBar token={token}/>
        <div className={styles.container}>
          <div className={styles.topcontainer}>
            <div className={styles.personalinfo}>
              <div className={styles.name}>
                <Avatar
                  alt="Personal"
                  src={data?.data?.user?.picture}
                  sx={{ width: 56, height: 56 }}
                />
                <p
                  style={{ fontSize: "20px" }}
                >{`${data?.data?.user?.name}，歡迎回來`}</p>
              </div>
              <PlanCard
                title={data?.data?.user?.memo_title}
                content={data?.data?.user?.memo_content}
                token={token}
              />
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <DataCard
                isDebitCard
                token={token}
                // color="linear-gradient(to bottom, #d0eed7, #e0f8fc)"
                color="#fffcf7"
              />
              <DataCard
                token={token}
                color="#e6f0f2"
                // color="linear-gradient(to bottom, #e3f2ff, #dbe9ff)"
              />
            </div>
          </div>
          <div
            style={{
              borderRadius: "20px",
              backgroundColor: "#fff",
              // width: "95%",
              margin: "0px 30px 30px",
              boxShadow: "0 0 10px rgb(0,0,0,0.2)",
            }}
          >
            <SwitchBar token={token} />
          </div>
        </div>
      </CardTemplate>
    </div>
  );
}

export const getServerSideProps = ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token");
  const userId = cookies.get("id");
  const username = cookies.get("username") || null;

  if (!token) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      token,
      userId,
      username,
    },
  };
};
