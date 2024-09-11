import {createContext, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackDate from "../data/FeedbackDate";
//创建context:createContext 是 React 提供的 API，用来创建一个上下文对象 FeedbackContext，用于跨组件共享数据。你传递了 undefined 作为默认值，但通常这里可以不传递默认值，或者提供初始状态值。
const FeedbackContext = createContext()

// FeedbackProvider 是一个高阶组件（Provider），包裹着你的应用组件树，并通过 value 属性将共享的 feedback 数据传递给子组件。
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(FeedbackDate);
  const [feedbackEdit, setFeedbackEdit] = useState({item: {}, edit: false});

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //set item to be updated
  const editFeedback = (item,) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  }
  const updateFeedback = (id, newFeedback) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? {...item, ...newFeedback} : item;
      })
    )
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{feedback, addFeedback, deleteFeedback, editFeedback, feedbackEdit, updateFeedback}}
    >
      {children}
    </FeedbackContext.Provider>
  );
}
export default FeedbackContext;