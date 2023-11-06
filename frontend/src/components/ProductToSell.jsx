"use client";
import { useState } from "react";
import classes from "@/styles/rawMaterialForm.module.css";
import Header from "./Header";
import useSmallSearch from "@/hook/useSmallSearch";
import { usePostData } from "@/hook/usePostData";
const ProductToRetailer = ({ state, onCancel }) => {
  const { smallSearch } = useSmallSearch();

  const [availabelRawMaterials, setAvailableRawMaterials] = useState([]);
  const [selectedRawMaterials, setRawMaterials] = useState({
    productID: "",
    productName: "",
    productDescription: "",
    quantityAvailable: "",
    price: "",
    category: "",
  });
  const { postData } = usePostData();

  const onSubmit = async () => {
    if (
      !selectedRawMaterials.productID ||
      !selectedRawMaterials.category ||
      !selectedRawMaterials.quantityAvailable ||
      !state.wallet
    )
      return;

    const bodyData = {
      productID: selectedRawMaterials.productID,
      productName: selectedRawMaterials.productName,
      description: selectedRawMaterials.productDescription,
      quantityAvailable: selectedRawMaterials.quantityAvailable,
      price: selectedRawMaterials.price,
      category: selectedRawMaterials.category,
      retailerID: state.wallet,
    };
    const response = await postData(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/retailstore/products`,
      bodyData
    );
    if (response.type == "Success") {
      setRawMaterials({
        productID: "",
        productName: "",
        productDescription: "",
        quantityAvailable: "",
        price: "",
        category: "",
      });
    }
  };
  const handleChangeRawMaterial = async (event) => {
    if (!event.target.value) {
      setAvailableRawMaterials([]);
      return;
    }
    const searchData = await smallSearch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products/${event.target.value}`
    );
    console.log(searchData);
    setAvailableRawMaterials([...searchData.response]);
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
              <div
                style={{ flex: "1 1 1000px" }}
                className={classes["search-container"]}
              >
                <div className={classes["input-field-container"]}>
                  <ul className={classes["selected-raw-materials"]}>
                    {selectedRawMaterials.productID && (
                      <li
                        key={
                          selectedRawMaterials.productID ||
                          selectedRawMaterials.materialID
                        }
                        style={{ listStyle: "none" }}
                      >
                        {selectedRawMaterials.productName} (
                        {selectedRawMaterials.supplierID})
                        <button
                          onClick={() => {
                            setRawMaterials({
                              productID: "",
                              productName: "",
                              productDescription: "",
                              quantityAvailable: "",
                              price: "",
                              category: "",
                            });
                          }}
                          style={{ float: "right" }}
                        >
                          Remove
                        </button>
                      </li>
                    )}
                  </ul>
                  <label style={{ marginTop: "1rem" }} htmlFor="quantity">
                    Product
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
                      key={material.productID}
                      onClick={() => {
                        setRawMaterials(material);
                        setAvailableRawMaterials([]);
                      }}
                    >
                      {material.productName} ({material.supplierID})
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Product Name"
                  value={selectedRawMaterials.productName}
                  disabled
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="description">Product Description?</label>
                <textarea
                  type="text"
                  id="description"
                  placeholder="e.g. Asia's largest hackathon"
                  value={selectedRawMaterials.productDescription}
                  disabled
                  rows={3}
                />
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
                  value={selectedRawMaterials.quantityAvailable}
                  onChange={(e) => {
                    setRawMaterials({
                      ...selectedRawMaterials,
                      quantityAvailable: e.target.value,
                    });
                  }}
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
                  value={selectedRawMaterials.price}
                  disabled
                />
              </div>
              <div className={classes["input-field-container"]}>
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  placeholder="Product Category"
                  value={selectedRawMaterials.category}
                  onChange={(e) => {
                    setRawMaterials({
                      ...selectedRawMaterials,
                      category: e.target.value,
                    });
                  }}
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

export default ProductToRetailer;
