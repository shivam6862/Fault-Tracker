"use client";
import classes from "@/styles/ProductIds.module.css";
import { usePathname } from "next/navigation";
import { useGetData } from "@/hook/useGetData";
import { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import { FaUserCircle } from "react-icons/fa";

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
        <span className={classes["supplier-id"]}>
          <FaUserCircle size={30} />
          {data.supplierID}
        </span>
      </button>
      {isOpen && data.subproducts && (
        <ul className={classes["child-list"]}>
          {data.subproducts.map((subProduct) => (
            <TreeNode key={subProduct._id} data={subProduct} />
          ))}
          {data.materials &&
            data.materials.map((material) => (
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
      <TreeNode data={data} />
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
    <PageTemplate>
      <div className={classes.container}>
        <div className={classes.box}>
          <p style={{ marginBottom: "1rem" }}>
            {!isLoading && productIdsdefectsData.response.productName}
          </p>
          <br />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TreeView data={productIdsdefectsData.response} />
          )}
        </div>
      </div>
    </PageTemplate>
  );
};

export default productIds;
