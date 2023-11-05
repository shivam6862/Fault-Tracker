"use client";
import classes from "@/styles/DefectsItem.module.css";
import Image from "next/image";
import Link from "next/link";

const DefectsItem = ({
  productID,
  description,
  defectType,
  reportedBy,
  status,
  dateReported,
  thumbnail,
}) => {
  return (
    <div className={classes.container}>
      <Link href={`${productID}`}>
        <div className={classes.defectCard}>
          <div className={classes.defectCard_imgBox}>
            <Image height={400} width={600} src={thumbnail} alt="img" />
          </div>
          <div className={classes.defectCard_info}>
            <div className={classes.defectCard_text}>
              <h5>defectType : {defectType}</h5>
              <div className={classes.viewsAndTime}>
                <p>reportedBy : {reportedBy}</p>
                <p>description : {description}</p>
                <p>dateReported : {dateReported}</p>
                <p>status : {status} </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DefectsItem;
