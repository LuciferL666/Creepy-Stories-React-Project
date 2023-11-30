import React from 'react';

import '../../public/styles/30_pages/404.css'

const Err = () => {
    return (

<main>
    <section className='section404'>
        <div className="image404">
            <img className='404' src="../../images/SeekPng.com_reaper-png_142193.png" alt="grim" />
        </div>
        <div className="message404">
            <h1 className="404">Error 404</h1>
            <div className="text404">
                Oops!
                <br />
                You have reached a dead end.
            </div>
        </div>
    </section>
</main>    

)
};

export default Err;