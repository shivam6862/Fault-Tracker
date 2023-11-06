"use client";
import classes from "@/styles/ProductIds.module.css";
import { usePathname } from "next/navigation";
import { useGetData } from "@/hook/useGetData";
import { useState } from "react";

function TreeNode({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={classes["list-item"]}>
      <button
        className={
          data.materialName ? classes["last-btn"] : classes["show-btn"]
        }
        onClick={handleClick}
      >
        {data.productName || data.materialName}
      </button>
      {isOpen && data.subProductIDs && (
        <ul className={classes["child-list"]}>
          {data.subProductIDs.map((subProduct) => (
            <TreeNode key={subProduct._id} data={subProduct} />
          ))}
          {data.materialIDs &&
            data.materialIDs.map((material) => (
              <TreeNode key={material._id} data={material} />
            ))}
        </ul>
      )}
    </li>
  );
}

function TreeView({ data }) {
  return (
    <ul className={classes["root-list"]}>
      {data.map((item) => (
        <TreeNode key={item._id} data={item} />
      ))}
    </ul>
  );
}

const productIds = () => {
  const seriesid = usePathname().substring(9);
  const { isLoading, data: productIdsdefectsData } = useGetData(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/series/${seriesid}/products`,
    { response: { subProductIDs: [] } }
  );
  console.log(productIdsdefectsData);

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {!isLoading && productIdsdefectsData.response.productName}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <TreeView data={productIdsdefectsData.response.subProductIDs} />
        )}
      </div>
    </div>
  );
};

export default productIds;
