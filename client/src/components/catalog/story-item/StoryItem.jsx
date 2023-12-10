import { Link } from "react-router-dom";

export default function StoryItem({ _id, title, category, imageUrl, summary }) {
  return (
    <div class="allStories">
      <div class="allStories-info">
        <img src={imageUrl} />
        <h6>{category}</h6>
        <h2>{title}</h2>
        <Link to={`/story/${_id}/details`}>Details</Link>
      </div>
    </div>
  );
}
