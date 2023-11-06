"use client";
import { useState } from "react";
import classes from "@/styles/rawMaterialForm.module.css";
import Header from "./Header";
import useSmallSearch from "@/hook/useSmallSearch";
import { usePostData } from "@/hook/usePostData";
const Defect = ({ state, onCancel }) => {
  const { smallSearch } = useSmallSearch();

  const [availabelRawMaterials, setAvailableRawMaterials] = useState([]);
  const [selectedRawMaterials, setRawMaterials] = useState({
    productID: "",
    productName: "",
    productDescription: "",
    defectType: "",
    defectDescription: "",
    supplierID: "",
    reportedBy: "",
  });
  const { postData } = usePostData();

  const onSubmit = async () => {
    if (
      !selectedRawMaterials.productID ||
      !selectedRawMaterials.defectType ||
      !selectedRawMaterials.defectDescription ||
      !selectedRawMaterials.reportedBy ||
      !state.wallet
    )
      return;

    const bodyData = {
      productID: selectedRawMaterials.productID,
      description: selectedRawMaterials.defectDescription,
      defectType: selectedRawMaterials.defectType,
      reportedBy: selectedRawMaterials.reportedBy,
    };
    const response = await postData(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/defects`,
      bodyData
    );
    if (response.type == "Success") {
      setRawMaterials({
        productID: "",
        productName: "",
        productDescription: "",
        defectType: "",
        defectDescription: "",
        supplierID: "",
        reportedBy: "",
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
                              defectType: "",
                              defectDescription: "",
                              reportedBy: "",
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
                        setRawMaterials({
                          ...selectedRawMaterials,
                          productID: material.productID,
                          productName: material.productName,
                          productDescription: material.productDescription,
                          supplierID: material.supplierID,
                        });
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
                style={{ flex: "1 1 1700px" }}
                className={classes["input-field-container"]}
              >
                <label htmlFor="type">Defect Type</label>
                <input
                  type="text"
                  id="type"
                  placeholder="Type of Defect"
                  value={selectedRawMaterials.defectType}
                  onChange={(e) => {
                    setRawMaterials({
                      ...selectedRawMaterials,
                      defectType: e.target.value,
                    });
                  }}
                />
              </div>
              <div
                style={{ flex: "1 1 1000px" }}
                className={classes["input-field-container"]}
              >
                <label htmlFor="defect">Defect Description</label>
                <input
                  type="text"
                  id="defect"
                  placeholder="Defect Description"
                  value={selectedRawMaterials.defectDescription}
                  onChange={(e) => {
                    setRawMaterials({
                      ...selectedRawMaterials,
                      defectDescription: e.target.value,
                    });
                  }}
                />
              </div>

              <div className={classes["input-field-container"]}>
                <label htmlFor="reporter">Reported By</label>
                <input
                  type="text"
                  id="repoter"
                  placeholder="
                  Reported By"
                  value={selectedRawMaterials.reportedBy}
                  onChange={(e) => {
                    setRawMaterials({
                      ...selectedRawMaterials,
                      reportedBy: e.target.value,
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

export default Defect;
