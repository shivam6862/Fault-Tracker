"use client";
import React, { useEffect, useState } from "react";
import classes from "@/styles/header.module.css";
import Wallet from "./wallet";
import { useMetamask } from "@/utils/useMetamask";
import { useListen } from "@/utils/useListen";
import Link from "next/link";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`${classes.container} ${isScrolled ? classes.hide : ""}`}>
      <div className={classes.box}>Header</div>
      <div className={classes.links}>
        <Link href="/defects">Defects</Link>
      </div>
      <Wallet />
    </div>
  );
};

export default Header;
