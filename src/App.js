import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header";

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContext";


import Post from "./components/Post";
import AboutIconLink from "./components/AboutIconLink";

function App() {

  // const deleteFeedback, setDeleteFeedback] = useState(false);
  return (
    <FeedbackProvider>
      <Router>
        <Header bgColor="red" textColor="blue" text="hello kiwa"/>
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList  />

              </>
            }/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/post/*" element={<Post/>}/>
          </Routes>
          <AboutIconLink/>
        </div>
      </Router>
    </FeedbackProvider>
  )
    ;
}

export default App;