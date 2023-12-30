import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    //we need to keep track of the state of the toggle, that will determine light or dark mode
    // it also needs to use the computer's default light/dark mode

    return (
        <div className="flex flex-col float-left gap-3">
            <div>
                <p className="font-roboto float-left text-8xl text-light-text">Hi</p>
            </div>
            <div>
                <div className="float-left text-light-text">
                    <Link to="/sketches/01">Sketches</Link>
                </div>
            </div>

        </div>
    );
}

export default Home;

