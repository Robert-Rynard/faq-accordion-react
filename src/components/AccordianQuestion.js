import arrow from "../images/icon-arrow-down.svg";
import cn from "classnames";
import styles from "./AccordianQuestion.module.css";

export const AccordianQuestion = ({ children, onClick, isOpen }) => {
  return (
    <div className={styles.question} onClick={onClick}>
      <h3 className={cn(styles.title, { [styles.bold]: isOpen })}>
        {children}
      </h3>
      <img
        className={cn(styles.arrow, { [styles.clicked]: isOpen })}
        src={arrow}
        alt="arrow icon"
      />
    </div>
  );
};
