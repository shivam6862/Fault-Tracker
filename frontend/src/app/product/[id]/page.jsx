"use client";
import classes from "@/styles/ProductIds.module.css";
import { usePathname } from "next/navigation";

const productIds = () => {
  const id = usePathname().substring(9);

  return (
    <div className={classes.container}>
      <div className={classes.box}>ProductIds {id}</div>
    </div>
  );
};

export default productIds;
