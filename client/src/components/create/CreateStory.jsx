import '../../../public/styles/30_pages/create.css'

export default function CreateStory () {
    const createStorySubmitHandler = (e) => {
        e.preventDefault();

        const storyData = Object.fromEntries(new FormData(e.currentTarget))

        console.log(storyData);
    }


    return (
        <section className="story">
            <form className='createStory' onSubmit={createStorySubmitHandler}>
                <div className="storyContain">
                    <h1>Create Story</h1>
                    <label htmlFor="story-title">title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter story title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter story category" />

                    
                    <label htmlFor="story-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Enter story imgUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
                    <input className="story-submit-btn" type="submit" value="Create" />
                </div>
            </form>
        </section>
    )
}