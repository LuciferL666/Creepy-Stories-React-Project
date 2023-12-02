import '../../../public/styles/30_pages/details.css'

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import * as storyService from '../../services/storyService'
import * as commentService from '../../services/commentService'
import AuthContext from '../../contexts/authContext';

export default function Details () {
    const { email } = useContext(AuthContext)
    const [story, setStory] = useState({});
    const[comments, setComments] = useState([])
    const { storyId } = useParams();
    const {
        isAuthenticated,
        username,
      } = useContext(AuthContext);

    useEffect (() => {
        storyService.getOne(storyId)
            .then(setStory);

        commentService.getAll(storyId)
            .then(setComments)
    }, [storyId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            storyId,
            formData.get('comment')
            );



            setComments(state => [...state, {...newComment, author: {email}}])
    }

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
  
            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                     {/* <!-- list all comments for current game (If any) -->  */}
                    {comments.map(({ _id, text, }) => (
                        <li key={_id} className="comment">
                            <p>{email}: {text}</p>
                        </li>
                        ))}
                </ul>

                {comments.length === 0 && (
                <p className="no-comment">No comments.</p>
                )}
            </div>

             {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> 
            <div className="detailsBtn">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div> */}
        </div>

         {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->  */}
            {isAuthenticated && (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="formDetails" onSubmit={addCommentHandler}>

                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btnSubm" type="submit" value="Add Comment" />
            </form>
        </article>
                )}

    </section>
    )
}