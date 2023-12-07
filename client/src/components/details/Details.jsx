import '../../../public/styles/30_pages/details.css'

import { useContext, useEffect, useMemo, useReducer, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import * as storyService from '../../services/storyService'
import * as commentService from '../../services/commentService'
import AuthContext from '../../contexts/authContext';
import reducer from './commentReducer';
import useForm from '../../hooks/useForm'
import { pathToUrl } from '../../utils/pathUtils';
import Path from '../../paths';


export default function Details () {
    const navigate = useNavigate();
    const { email, userId } = useContext(AuthContext)
    const [story, setStory] = useState({});
    const [comments, dispatch] = useReducer(reducer, [])
    const { storyId } = useParams();
    const {isAuthenticated, username, } = useContext(AuthContext);
    useEffect (() => {
        storyService.getOne(storyId)
        .then(setStory);
        
        commentService.getAll(storyId)
        .then((result) => {
            dispatch({
                type: 'GET_ALL_COMMENTS',
                payload: result,
            })
        });
    }, [storyId]);
    
    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            storyId,
            values.comment
            );
            
            
            newComment.owner = {email};
            //setComments(state => [...state, {...newComment, author: {email}}])
            dispatch({
                type: 'ADD_COMMENT',
                payload: newComment
            })
        }

        const deleteButtonClickHandler = async () => {
            const hasConfirmed = confirm(`Are you sure you want to delete your ${story.title}`)
        
            if (hasConfirmed){
               await storyService.del(storyId);

               navigate('/catalog')
            }
        
        }


        const {values, onChange, onSubmit} = useForm(addCommentHandler, {
            comment: '',
    });

        
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
  

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(({ _id, text, owner: {email} }) => (
                        <li key={_id} className="comment">
                            <p>{email}: {text}</p>
                        </li>
                        ))}
                </ul>

                {comments.length === 0 && (
                <p className="no-comment">No comments.</p>
                )}
            </div>

            {userId === story._ownerId && (

                <div className="detailsBtn">
                <Link to={pathToUrl(Path.StoryEdit, {storyId})} className="button">Edit</Link>
                <button className='button' onClick={deleteButtonClickHandler}>Delete</button>
            </div>
            )}
        </div>
            {isAuthenticated && (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="formDetails" onSubmit={onSubmit}>

                <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                <input className="btnSubm" type="submit" value="Add Comment" />
            </form>
        </article>
                )}

    </section>
    )
}