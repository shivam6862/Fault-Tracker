"use client";
import { useState } from "react";
import { useMetamask } from "@/utils/useMetamask";
import { useListen } from "@/utils/useListen";
import { useEffect } from "react";

const Page = () => {
  const traits = "Test Hack";
  const [project, setProject] = useState({
    name: "DappHack",
    description: "Web3 hackathon portal",
    track1: "Filecoin",
    track2: "Polygon",
    link: "",
  });
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [projectImage, setProjectImage] = useState(null);

  const handleProjectChange = (name) => (event) => {
    setProject({ ...project, [name]: event.target.value });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

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

  return <h1> Home Page</h1>;
};

export default Page;
