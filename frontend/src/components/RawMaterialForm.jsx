"use client";
import { useState } from "react";
import classes from "@/styles/rawMaterialForm.module.css";
import Header from "./Header";
const RawMaterialForm = ({ onCancel }) => {
  const traits = "Test Hack";
  const [material, setMaterial] = useState({
    name: "",
    unitPrice: "",
    quantity: "",
  });

  const handleProjectChange = (name) => (event) => {
    setMaterial({ ...material, [name]: event.target.value });
  };
  const onSubmit = () => {
    return;
  };

  return (
    <>
      <div className={classes["hack-details"]}>
        <h1>Raw Material Details</h1>
      </div>
      {/* <h1 className={classes["project-heading"]}>Project Submission</h1> */}
      <div className={classes["project-container"]}>
        <div className={classes["project-details"]}>
          <div>
            <div className={classes["project-info"]}>
              <div className={classes["input-field-container"]}>
                <label htmlFor="name">Material Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Material Name"
                  value={material.name}
                  onChange={handleProjectChange("name")}
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
                  value={material.quantity}
                  onChange={handleProjectChange("quantity")}
                />
              </div>
              <div
                style={{ flex: "1 1 1700px" }}
                className={classes["input-field-container"]}
              >
                <label htmlFor="reason">Unit Price</label>
                <input
                  type="number"
                  id="price"
                  placeholder="Unit Price"
                  value={material.unitPrice}
                  onChange={handleProjectChange("unitPrice")}
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

export default RawMaterialForm;