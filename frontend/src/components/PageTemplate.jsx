import React from "react";
import Sidebar from "./Sidebar";
import searchIcon from "../../public/icons/search.svg";
import Image from "next/image";
import Link from "next/link";
import Wallet from "./wallet";
function PageTemplate({ children }) {
  return (
    <div className="page-template">
      <Sidebar />
      <div className="page">
        <div className="page-top">
          <div className="input-container">
            <input id="hack-search" type="text" placeholder="Search" />
            <label htmlFor="hack-search">
              <Image src={searchIcon} alt="search" />
            </label>
          </div>

          <Wallet />
        </div>
        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}

export default PageTemplate;
