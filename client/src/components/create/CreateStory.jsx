import { useNavigate } from "react-router-dom";

import "../../../public/styles/30_pages/create.css";

import * as storyService from "../../services/storyService";

export default function CreateStory() {
  const navigate = useNavigate();

  const createStorySubmitHandler = async (e) => {
    e.preventDefault();

    const storyData = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await storyService.create(storyData);

      navigate("/catalog");
    } catch (err) {
      //error notification
      console.log(err);
    }
  };

  return (
    <section className="story">
      <form className="createStory" onSubmit={createStorySubmitHandler}>
        <div className="storyContain">
          <h1>Create Story</h1>
          <label htmlFor="story-title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter story title"
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter story category"
          />

          <label htmlFor="story-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter story imgUrl"
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
          <input className="story-submit-btn" type="submit" value="Create" />
        </div>
      </form>
    </section>
  );
}
