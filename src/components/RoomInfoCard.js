import React, { useState, useEffect } from "react";
import style from "../style/roomCard.module.css";
import data from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/Bs";

export default function RoomInfoCard(props) {
  return (
    <>
      <h2>Room Info Card</h2>
      {data.map((item) => (
        <div>
          <div>
            <div className={style.roomCardContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src="/images/user-img.jpg" alt="image1" />
                  <img src="/images/user-img2.jpg" alt="image2" />
                </div>
                <div>
                  {item.members.map((person) => (
                    <p>
                      {person.first_name}
                      {person.last_name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}