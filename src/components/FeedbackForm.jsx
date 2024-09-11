import Card from '../components/Card';
import {useContext, useState,useEffect} from "react";
import Button from '../components/Button';
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from "../context/FeedbackContext";



function FeedbackForm() {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(5);
    const [btnDisabled, setBtnDisabled] = useState(true);
    //导入context 的 addfeedback
    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);//

    useEffect(() => {
        if (feedbackEdit.edit ===true){
             // setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(Number(feedbackEdit.item.rating))
        }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if (text.trim().length >= 10) {
            setMessage("");
            setBtnDisabled(false);
        } else {
            setMessage("Text must be longer than 10 characters.");
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const id=uuidv4()
            const newFeedback = {id,text, rating, btnDisabled}

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id,newFeedback)

            }
            else{

                addFeedback(newFeedback)
            }
            setText("")
            setRating(5)
            setBtnDisabled(true);
        }



    }

    return (

      <Card>
          <form onSubmit={handleSubmit}>
              <h2>
                  How would you rate your service with us?
                  <RatingSelect rating={rating} setRating={setRating}/>
                  <div className="input-group">
                      <input

                        onChange={handleTextChange}
                        type="text"
                        value={text}
                        name=""
                        id=""
                        placeholder="white a review"/>
                      <Button type="submit" version="secondary" isDisabled={btnDisabled}>Send</Button>
                      {message && <div className="message">{message}</div>}
                  </div>
              </h2>
          </form>
      </Card>

    );
    }

export default FeedbackForm;