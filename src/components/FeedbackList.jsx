import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";
// import {motion,AnimatePresence} from "framer-motion"
function FeedbackList() {
  const {feedback,deleteFeedback} = useContext(FeedbackContext);//

  if (!feedback || feedback.length === 0) {
    return (<p>还没有反馈内容</p>)
  }
  return (<div className="feedback-list">
      {feedback.map((item) => <FeedbackItem key={item.id} item={item} handleClick={(id)=>deleteFeedback(id)}/>)}
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //     {feedback.map((item) =>
  //       <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
  //         <FeedbackItem key={item.id} item={item} handleClick={(id)=>handleDelete(id)}/></motion.div>)}
  //     </AnimatePresence>
  //   </div>
  // );
}
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default FeedbackList;