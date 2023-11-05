"use client";
import React from "react";
import classes from "@/styles/home.module.css";
import { useProtectedGetData } from "../hook/useProtectedGetData";
import { usePostData } from "../hook/usePostData";

const Page = () => {
  const { postData } = usePostData();
  const { isLoading, data: conversations } = useProtectedGetData(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/checking`,
    []
  );

  return (
    <div className={classes.container}>
      <div className={classes.box}>Home Page</div>
      <div>
        <button
          onClick={() => {
            postData(`${process.env.NEXT_PUBLIC_BACKEND_URL}/checking`, {});
          }}
        >
          Checking
        </button>
      </div>
    </div>
  );
};

export default Page;
