"use client";
import styles from "@/styles/page.module.css";
import PageTemplate from "@/components/PageTemplate";

import Link from "next/link";
import DefectsItem from "@/components/DefectsItem";
import { useEffect, useState } from "react";
import { useGetData } from "@/hook/useGetData";

export default function Home() {
  const { isLoading, data: defectsData } = useGetData(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/defects`,
    { response: [] }
  );

  return (
    <PageTemplate>
      <div className="heading-container">
        <h1 className="heading">All Defects</h1>
        <Link href={"/"}>view all</Link>
      </div>

      <div className={styles.grid}>
        {defectsData.response.map((item, i) => (
          <DefectsItem
            productID={`/product/${item.productID}`}
            description={item.description}
            defectType={item.defectType}
            reportedBy={item.reportedBy}
            status={item.status}
            dateReported={item.dateReported}
            thumbnail={"/error.jpg"}
            key={i}
          />
        ))}
      </div>
    </PageTemplate>
  );
}
