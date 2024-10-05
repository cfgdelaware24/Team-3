import React from 'react';
import './storyCard.css';
import './stories.js';

function StoryCard ({ story, index }) {

    return (
        <div className="storyCard">
            {/* Displays image and name */}
            <div className="verticalBundle">
                <img src={story.img_src} alt={story.name} width="30%" height="30%" className="image"/>
                <p>{story.name}</p>
            </div>
        </div>
    );
}

export default StoryCard;