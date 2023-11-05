"use client";
import classes from "@/styles/DefectsItem.module.css";
import { FaGripLines } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const DefectsItem = ({
  title,
  channel,
  views,
  timestamp,
  thumbnail,
  videoLink,
}) => {
  return (
    <div className={classes.container}>
      <Link href={`${videoLink}`}>
        <div className={classes.videocard}>
          <div className={classes.firstpart}>
            <FaGripLines />
          </div>
          <div className={classes.videocard_imgBox}>
            <Image height={400} width={600} src={thumbnail} alt="img" />
          </div>
          <div className={classes.videocard_info}>
            <div className={classes.videocard_text}>
              <h5>{title}</h5>
              <div className={classes.viewsAndTime}>
                <p>{channel}</p>
                <p>{views} views </p>
                <p> • {timestamp}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DefectsItem;
