"use client";
import classes from "@/styles/Defects.module.css";
import DefectsItem from "@/components/DefectsItem";

const defects = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <DefectsItem
          title={"title"}
          channel={"channel"}
          views={"views"}
          timestamp={"timestamp"}
          thumbnail={"/error.jpg"}
          videoLink={"/product/123"}
        />
        <DefectsItem
          title={"title"}
          channel={"channel"}
          views={"views"}
          timestamp={"timestamp"}
          thumbnail={"/error.jpg"}
          videoLink={"/product/12345"}
        />
      </div>
    </div>
  );
};

export default defects;
