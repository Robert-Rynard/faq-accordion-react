import { accordianReducer, useAccordion } from "../hooks/use-accordian";

import { AccordianAnswer } from "./AccordianAnswer";
import { AccordianItem } from "./AccordianItem";
import { AccordianQuestion } from "./AccordianQuestion";

const combineReducers = (...reducers) => {
  return (state, action) => {
    for (const reducer of reducers) {
      const result = reducer(state, action);
      if (result) return result;
    }
  };
};

const Accordian = ({ questions, reducer = () => {} }) => {
  const { activeItems, toggleItem } = useAccordion({
    reducer: combineReducers(reducer, accordianReducer),
  });
  return (
    <div>
      {questions.map(({ title, id, body }, idx) => {
        return (
          <AccordianItem key={id}>
            <AccordianQuestion
              isOpen={activeItems.includes(idx)}
              onClick={() => toggleItem(idx)}
            >
              {title}
            </AccordianQuestion>
            <AccordianAnswer isOpen={activeItems.includes(idx)}>
              {body}
            </AccordianAnswer>
          </AccordianItem>
        );
      })}
    </div>
  );
};

export default Accordian;
