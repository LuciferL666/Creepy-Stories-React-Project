import { Link } from 'react-router-dom'
import '../../../public/styles/30_pages/catalog.css'
import { useEffect, useState } from 'react'


import * as storyService from '../../services/storyService'


export default function Catalog () {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        storyService.getAll()
            .then(result => setStories(result));
    }, []);

    console.log(stories);

    return (
        <section className='cata'>
            <h1>All Stories</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            <div class="allStories">
                <div class="allStories-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <Link to='/details'>Details</Link>
                </div>

            </div>

            

{/*         <!-- Display paragraph: If there is no games  --> */}
            <h3 class="no-stories">No articles yet</h3>
        </section>
    )
}