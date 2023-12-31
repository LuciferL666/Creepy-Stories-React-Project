import "../../../public/styles/30_pages/catalog.css";
import { useEffect, useState } from "react";

import * as storyService from "../../services/storyService";
import StoryItem from "./story-item/StoryItem";

export default function Catalog() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    storyService
      .getAll()
      .then((result) => setStories(result))
      .catch((err) => {
        console.log("No stories yet be the first to post!");
      });
  }, []);

  return (
    <section className="cata">
      <h1>All Stories</h1>

      {stories.map((story) => (
        <StoryItem key={story._id} {...story} />
      ))}

      {stories.length === 0 && <h3 class="no-stories">No articles yet</h3>}
    </section>
  );
}
