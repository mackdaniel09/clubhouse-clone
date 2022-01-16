import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";

export default function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div className={`${exploreStyle.head} text-right mb-0`}>
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt=""
                className={exploreStyle.arrow_icon}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src="/images/user-img.jpg" className={style.profile_img} alt="" />
        <h4>Rafeh Qazi</h4>
        <p>CleverQazi</p>
        <div className={style.follow}>
          <p>
            <span>0</span> Follower
          </p>
          <p>
            <span>51</span> Following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button>
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-img.jpg" alt="" />
          <div>
            <p>Joined 14-July 2021</p>
            <p>
              Nominated by <span>Anton Alarcon</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}
