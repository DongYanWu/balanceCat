import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
// import YearPicker from "@/components/YearPicker";
import CardTemplate from "@/components/cardTemplate/CardTemplate";
import DataCard from "@/components/userpage/DataCard";
import SideBar from "@/components/SideBar";
import TargetList from "@/components/userpage/TargetList";
import SwitchBar from "@/components/userpage/SwitchBar";
import PlanCard from "@/components/userpage/PlanCard";
import styles from "../../styles/userpage.module.scss";
import Sun from "@/components/Sun";

export default function UserPage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0f0f15",
      }}
    >
      <Sun />
      <CardTemplate style={{ display: "flex" }}>
        <SideBar />
        <div className={styles.container}>
          <div className={styles.topcontainer}>
            <div className={styles.personalinfo}>
              <div className={styles.name}>
                <Avatar
                  alt="Personal"
                  src="/pic.jpg"
                  sx={{ width: 56, height: 56 }}
                />
                <p style={{ fontSize: "20px" }}>Tony，歡迎回來</p>
              </div>
              <PlanCard />
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <DataCard
                isDebitCard
                color="linear-gradient(to bottom, #ddd3ff, #fdcbff)"
              />
              <DataCard color="linear-gradient(to bottom, #8ee8f7, #b0f2f0)" />
            </div>
          </div>
          <SwitchBar />
        </div>
      </CardTemplate>
    </div>
  );
}
