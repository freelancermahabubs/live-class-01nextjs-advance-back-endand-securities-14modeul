"use client";
import React from "react";
import {useRouter} from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const Logout = async () => {
    const res = await fetch("api/login");
    const json = await res.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={Logout}>LogOut</button>
    </div>
  );
};
export default DashboardPage;
