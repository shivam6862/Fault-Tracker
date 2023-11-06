"use client";
import classes from "@/styles/Defects.module.css";
import DefectsItem from "@/components/DefectsItem";
import { useGetData } from "@/hook/useGetData";

const defects = () => {
  const { isLoading, data: defectsData } = useGetData(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/defects`,
    { response: [] }
  );

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        {defectsData.response.map((item) => (
          <DefectsItem
            productID={`/product/${item.productID}`}
            description={item.description}
            defectType={item.defectType}
            reportedBy={item.reportedBy}
            status={item.status}
            dateReported={item.dateReported}
            thumbnail={"/error.jpg"}
            key={item.productID}
          />
        ))}
      </div>
    </div>
  );
};

export default defects;
