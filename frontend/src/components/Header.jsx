"use client";
import React, { useEffect } from "react";
import classes from "@/styles/header.module.css";
import Wallet from "./wallet";
import { useMetamask } from "@/utils/useMetamask";
import { useListen } from "@/utils/useListen";

const Header = () => {
  const { dispatch } = useMetamask();
  const listen = useListen();
  useEffect(() => {
    if (typeof window !== undefined) {
      const ethereumProviderInjected = typeof window.ethereum !== "undefined";

      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

      const local = window.localStorage.getItem("metamaskState");

      if (local) {
        listen();
      }

      const { wallet, balance } = local
        ? JSON.parse(local)
        : { wallet: null, balance: null };

      dispatch({ type: "pageLoaded", isMetamaskInstalled, wallet, balance });
    }
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.box}>Header</div>
      <Wallet />
    </div>
  );
};

export default Header;
