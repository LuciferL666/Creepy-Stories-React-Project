import { Link } from "react-router-dom";
import Path from "../../../paths";
import { pathToUrl } from "../../../utils/pathUtils";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";

export default function LatestStories ({
    _id,
    imageUrl,
    title,
    category,
}) {

    return (
        <section className="latest-stories">
        <ul className="storiesLatest">
        <li className="storiesLatest">
        <img src={imageUrl} alt="Story 1" />
          <h3>{title}</h3>
          <p>{category}</p>
          <Link to={pathToUrl(Path.StoryDetails, {storyId: _id})} className="btnDetailsLatest"><button>Details</button></Link>
        </li>
      </ul>
            </section>
    )
}