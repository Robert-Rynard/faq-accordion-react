import cn from "classnames";
import styles from "./AccordianAnswer.module.css";

export const AccordianAnswer = ({ children, isOpen }) => {
  return isOpen ? (
    <div className={cn(styles.answer, { [styles.clicked]: isOpen })}>
      {children}
    </div>
  ) : null;
};
