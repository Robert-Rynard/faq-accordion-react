import styles from "./AccordianItem.module.css";

export const AccordianItem = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};
