"use client";
import { useState } from "react";
import classes from "@/styles/rawMaterialForm.module.css";
import Header from "./Header";
import useSmallSearch from "@/hook/useSmallSearch";
import { usePostData } from "@/hook/usePostData";
const ProductFromRawMaterial = ({ state, onCancel }) => {
  const { smallSearch } = useSmallSearch();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    size: "",
    type: "",
    weight: "",
    warranty: "",
    machineIdentifier: "",
  });
  const [availabelRawMaterials, setAvailableRawMaterials] = useState([]);
  const [selectedRawMaterials, setRawMaterials] = useState([]);
  const { postData } = usePostData();

  const handleProjectChange = (name) => (event) => {
    setProduct({ ...product, [name]: event.target.value });
  };
  const onSubmit = () => {
    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.quantity ||
      !product.size ||
      !product.type ||
      !product.weight ||
      !product.warranty ||
      !product.machineIdentifier ||
      !state.wallet
    )
      return;
    const materialArray = selectedRawMaterials.filter(
      (material) => material.materialID
    );
    const productArray = selectedRawMaterials.filter(
      (material) => material.productID
    );

    const bodyData = {
      productName: product.name,
      productDescription: product.description,
      price: product.price,
      quantity: product.quantity,
      size: product.size,
      type: product.type,
      weight: product.weight,
      warrantyPeriod: product.warranty,
      machineIdentifier: product.machineIdentifier,
      supplierID: state.wallet,
      materialIDs: materialArray,
      subProductIds: productArray,
    };
    postData(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/generalassembly/product`,
      bodyData
    );
  };
  const handleChangeRawMaterial = async (event) => {
    if (!event.target.value) {
      setAvailableRawMaterials([]);
      return;
    }
    const searchData = await smallSearch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/rawMaterials/${event.target.value}`
    );
    console.log(searchData);
    setAvailableRawMaterials([
      ...searchData.response.products,
      ...searchData.response.rawMaterials,
    ]);
  };

  return (
    <>
      <div className={classes["hack-details"]}>
        <h1>Product Details</h1>
      </div>
      {/* <h1 className={classes["project-heading"]}>Project Submission</h1> */}
      <div className={classes["project-container"]}>
        <div className={classes["project-details"]}>
          <div>
            <div className={classes["project-info"]}>
              <div className={classes["input-field-container"]}>
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={handleProjectChange("name")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="description">Product Description?</label>
                <textarea
                  type="text"
                  id="description"
                  placeholder="e.g. Asia's largest hackathon"
                  value={product.description}
                  onChange={handleProjectChange("description")}
                  rows={3}
                />
              </div>
              <div
                style={{ flex: "1 1 1000px" }}
                className={classes["search-container"]}
              >
                <div className={classes["input-field-container"]}>
                  <ul className={classes["selected-raw-materials"]}>
                    {selectedRawMaterials.map((material, index) => (
                      <li
                        key={material.productID || material.materialID}
                        style={{ listStyle: "none" }}
                      >
                        {material.productName || material.materialName} (
                        {material.supplierID})
                        <button
                          onClick={() => {
                            const newSelectedRawMaterials = [
                              ...selectedRawMaterials,
                            ];
                            newSelectedRawMaterials.splice(index, 1);
                            setRawMaterials(newSelectedRawMaterials);
                          }}
                          style={{ float: "right" }}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <label style={{ marginTop: "1rem" }} htmlFor="quantity">
                    Raw Materials Used
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    placeholder="Raw Material"
                    onChange={(event) => {
                      handleChangeRawMaterial(event);
                    }}
                  />
                </div>
                <ul className={classes["available-raw-materials"]}>
                  {availabelRawMaterials.map((material) => (
                    <li
                      key={material.productID || material.materialID}
                      onClick={() => {
                        setRawMaterials([...selectedRawMaterials, material]);
                        setAvailableRawMaterials([]);
                      }}
                    >
                      {material.productName || material.materialName} (
                      {material.supplierID})
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{ flex: "1 1 1000px" }}
                className={classes["input-field-container"]}
              >
                <label htmlFor="name">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Material Quantity"
                  value={product.quantity}
                  onChange={handleProjectChange("quantity")}
                />
              </div>
              <div
                style={{ flex: "1 1 1700px" }}
                className={classes["input-field-container"]}
              >
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  placeholder="Price"
                  value={product.price}
                  onChange={handleProjectChange("price")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="size">Size</label>
                <input
                  type="text"
                  id="size"
                  placeholder="Product SizeName"
                  value={product.size}
                  onChange={handleProjectChange("size")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="pattern">Pattern</label>
                <input
                  type="text"
                  id="pattern"
                  placeholder="Product Pattern"
                  value={product.pattern}
                  onChange={handleProjectChange("pattern")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="type">Product Type</label>
                <input
                  type="text"
                  id="type"
                  placeholder="Product Type"
                  value={product.type}
                  onChange={handleProjectChange("type")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="weight">Product Weight</label>
                <input
                  type="text"
                  id="weight"
                  placeholder="Product Weight"
                  value={product.weight}
                  onChange={handleProjectChange("weight")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="warranty">Product Warranty Period</label>
                <input
                  type="text"
                  id="warranty"
                  placeholder="Product Warranty Period"
                  value={product.warranty}
                  onChange={handleProjectChange("warranty")}
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="machine">Machine Identifier</label>
                <input
                  type="text"
                  id="machine"
                  placeholder="Machinge Identifier"
                  value={product.machineIdentifier}
                  onChange={handleProjectChange("machineIdentifier")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["btn-group"]}>
        <button className={classes["cancel-btn"]} onClick={onCancel}>
          Cancel
        </button>
        <button className={classes["next-btn"]} onClick={onSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ProductFromRawMaterial;
