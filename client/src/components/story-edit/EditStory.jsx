import { useNavigate, useParams } from "react-router-dom";

import "../../../public/styles/30_pages/create.css";

import * as storyService from "../../services/storyService";
import useForm from "../../hooks/useForm";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditStory() {
  const navigate = useNavigate();
  const { storyId } = useParams();
  const [story, setStory] = useState({
    title: "",
    category: "",
    imageUrl: "",
    summary: "",
  });

  useEffect(() => {
    storyService.getOne(storyId).then((result) => {
      setStory(result);
    });
  }, [storyId]);

  const editStorySubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    const httpRegex = /^(http)/;

    if (values.title.trim() === '') {
      toast.error('Please provide a title');
      return;
    }
  
    if (values.category.trim() === '') {
      toast.error('Please provide a category');
      return;
    }
  
    if (values.imageUrl.trim() === '') {
      toast.error('Please provide the story image URL');
      return;
    }

    if (!httpRegex.test(values.imageUrl)) {
      toast.error("Please provide a valid URL starting with 'http'.");
      return;
    }
  
    if (values.summary.trim() === '') {
      toast.error('Please provide a summary');
      return;
    }

    try {
      await storyService.edit(storyId, values);

      navigate("/catalog");
    } catch (err) {
      //error notification
      console.log(err);
    }
  };

  const onChange = (e) => {
    setStory((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="story">
      <form className="createStory" onSubmit={editStorySubmitHandler}>
        <div className="storyContain">
          <h1>Create Story</h1>
          <label htmlFor="story-title">title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={story.title}
            onChange={onChange}
            placeholder="Enter story title"
            required
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={story.category}
            onChange={onChange}
            placeholder="Enter story category"
            
          />

          <label htmlFor="story-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={story.imageUrl}
            onChange={onChange}
            placeholder="Enter story imgUrl"
            title="Please provide the story image URL"
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            value={story.summary}
            onChange={onChange}
            id="summary"
            cols="30"
            rows="10"
          ></textarea>
          <input className="story-submit-btn" type="submit" value="Edit" />
        </div>
      </form>
    </section>
  );
}
