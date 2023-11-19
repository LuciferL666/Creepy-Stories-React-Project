import '../../../public/styles/30_pages/details.css'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import * as storyService from '../../services/storyService'

export default function Details () {
    const [story, setStory] = useState({})
    const { storyId } = useParams();

    useEffect (() => {
        storyService.getOne(storyId)
            .then(setStory);
    }, [storyId]);

    return (
        <section className="story-details">
        <h1>Story Details</h1>
        <div className="info-section">

            <div className="story-header">
                <img className="story-img" src={story.imageUrl} alt={story.title} />
                <h1>{story.title}</h1>
                <p className="type">{story.category}</p>
            </div>

            <p className="text">{story.summary}</p>
 {/* 
            <!-- Bonus ( for Guests and Users ) -->
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                     <!-- list all comments for current game (If any) --> 
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>
                 <!-- Display paragraph: If there are no games in the database --> 
                <p className="no-comment">No comments.</p>
            </div>

             <!-- Edit/Delete buttons ( Only for creator of this game )  --> 
            <div className="detailsBtn">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div> */}
        </div>

         {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> 
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="formDetails">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btnSubm" type="submit" value="Add Comment" />
            </form>
        </article> */}

    </section>
    )
}