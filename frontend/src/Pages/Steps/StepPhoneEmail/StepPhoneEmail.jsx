import React from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import { useState } from "react";
import styles from "../StepPhoneEmail/StepEmail.module.css"

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <div>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.tabButton} ${
                type === "phone" ? styles.active : ""
              }`}
              onClick={() => setType("phone")}
            >
              <img src="/images/phone.png" alt="phone" />
            </button>
            <button
              className={`${styles.tabButton} ${
                type === "email" ? styles.active : ""
              }`}
              onClick={() => setType("email")}
            >
              <img src="/images/email.png" alt="email" />
            </button>
          </div>
          <Component onNext = {onNext} />
        </div>
      </div>
    </div>
  );
};

export default StepPhoneEmail;
