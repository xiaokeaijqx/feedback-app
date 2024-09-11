import Card from "./Card";
import PropTypes from "prop-types";
import {FaXmark} from "react-icons/fa6";
import {FaEdit} from "react-icons/fa";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackItem({item, handleClick}) {
  const {editFeedback} = useContext(FeedbackContext);
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleClick(item.id)}>
        <FaXmark color="pink"/>
      </button>
      <button className="edit">
        <FaEdit color='pink' onClick={()=>editFeedback(item)}/>
      </button>
      <div className="text-display" >{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem;