"use client";
import { useState } from "react";
import classes from "@/styles/rawMaterialForm.module.css";
import Header from "./Header";
const ProductFromRawMaterial = ({ onCancel }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const handleProjectChange = (name) => (event) => {
    setProduct({ ...product, [name]: event.target.value });
  };
  const onSubmit = () => {
    return;
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
                style={{ flex: "1 1 400px" }}
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
