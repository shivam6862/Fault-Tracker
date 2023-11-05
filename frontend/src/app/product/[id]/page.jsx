"use client";
import classes from "@/styles/ProductIds.module.css";
import { usePathname } from "next/navigation";
import { useProtectedGetData } from "@/hook/useProtectedGetData";

const NestedDataRenderer = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          {key}:{" "}
          {Array.isArray(value) || typeof value === "object" ? (
            <NestedDataRenderer data={value} />
          ) : (
            value
          )}
        </li>
      ))}
    </ul>
  );
};

const productIds = () => {
  const seriesid = usePathname().substring(9);
  const { isLoading, data: productIdsdefectsData } = useProtectedGetData(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/series/${seriesid}/products`,
    { response: {} }
  );

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        ProductIds {seriesid}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <NestedDataRenderer data={productIdsdefectsData.response} />
        )}
      </div>
    </div>
  );
};

export default productIds;
