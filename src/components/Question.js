import React, { useState } from "react";

import arrow from "../images/icon-arrow-down.svg";
import classNames from "classnames";
import styles from "./Question.module.css";

const Question = ({ title, body, id }) => {
  const [clicked, setClicked] = useState(false);

  const expandHandler = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <div className={classNames(styles.box, { [styles.clicked]: clicked })}>
      <div className={styles.question} id={id} onClick={expandHandler}>
        <h3 className={classNames(styles.title, { [styles.bold]: clicked })}>
          {title}
        </h3>
        <img className={styles.arrow} src={arrow} alt="arrow icon" />
      </div>
      <p className={classNames(styles.body)}>{body}</p>
    </div>
  );
};

export default Question;
