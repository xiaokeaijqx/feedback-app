import {FaQuestion} from "react-icons/fa"
import {Link, link} from "react-router-dom"

function AboutIconLink(props) {
  return (
    <div className="about-link">
      <Link to={{
        pathname: "/", search: "?sort=name"
      }}>
        <FaQuestion size={30}/>
      </Link>
    </div>
  )
    ;
}

export default AboutIconLink;