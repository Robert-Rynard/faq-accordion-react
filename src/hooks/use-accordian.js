import { useReducer } from "react";

const actionTypes = { toggle_index: "toggle_index" };
const accordianReducer = (activeItems, action) => {
  if (action.type === actionTypes.toggle_index) {
    const closing = activeItems.includes(action.idx);
    return closing
      ? activeItems.filter((idx) => idx !== action.idx)
      : [...activeItems, action.idx];
  }
  throw new Error(`Unhandled type in accordionReducer: ${action.type}`);
};

const useAccordion = ({ reducer = accordianReducer } = {}) => {
  const [activeItems, dispatch] = useReducer(reducer, [2]);
  const toggleItem = (idx) => dispatch({ type: actionTypes.toggle_index, idx });
  return { activeItems, toggleItem };
};

export { actionTypes, accordianReducer, useAccordion };
