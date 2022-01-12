import React from "react";
import style from "../style/dailyInfoCard.module.css";
import data from "../data/dailyCard.json";

export default function DailyInfoCard() {
  console.log(data[0].title);
  return (
    <div className={style.dailyCard}>
      {data.map((item) => (
        <div>
          <span className="">{item.title}</span>
        </div>
      ))}
    </div>
  );
}
