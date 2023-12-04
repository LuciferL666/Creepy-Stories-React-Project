import { useNavigate, useParams } from 'react-router-dom'

import '../../../public/styles/30_pages/create.css'

import * as storyService from '../../services/storyService';
import useForm from '../../hooks/useForm';
import { useEffect, useState } from 'react';

export default function EditStory () {
    const navigate = useNavigate();
    const {storyId} = useParams();
    const [story, setStory] = useState({
        title: '',
        category: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        storyService.getOne(storyId)
        .then(result => {
            setStory(result)
        });
    }, [storyId]);

    const editStorySubmitHandler = async (values) => {
        try {
            await storyService.edit(storyId, values)

            navigate('/catalog');
        } catch (err) {
            //error notification
            console.log(err);
        }

    }

    const {values, onChange, onSubmit} = useForm(editStorySubmitHandler, story);

    return (
        <section className="story">
            <form className='createStory' onSubmit={onSubmit}>
                <div className="storyContain">
                    <h1>Create Story</h1>
                    <label htmlFor="story-title">title:</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onChange} placeholder="Enter story title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={values.category} onChange={onChange} placeholder="Enter story category" />

                    
                    <label htmlFor="story-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onChange} placeholder="Enter story imgUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" value={values.summary} onChange={onChange} id="summary" cols="30" rows="10"></textarea>
                    <input className="story-submit-btn" type="submit" value="Edit" />
                </div>
            </form>
        </section>
    )
}