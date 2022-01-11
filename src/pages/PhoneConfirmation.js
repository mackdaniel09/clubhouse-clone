import React, { useState } from "react";
import style from "../style/phoneConfirmation.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="arrow" />
      </Link>
      <h1>Enter your Phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p>
        By enetering your number, you're aggreeing to our{" "}
        <span>Terms of Service and Privacy Policy.</span> Thanks!
      </p>
      <Link to="/code_confirm" className="primaryBtn d-flex align-items-center">
        Next
        <img src="/images/nextArrowIcon.svg" className="ml-1" alt="arrow" />
      </Link>
    </div>
  );
}
