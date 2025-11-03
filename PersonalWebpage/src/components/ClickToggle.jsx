import React, {useState} from 'react';

export const audio = new Audio("/MouseClick.mp3");

const ClickToggle = () => {
    // set sound to false and give it a function
    const [sound, setSound] = useState(false);

    const toggleSound = () => {
        setSound(previousOn => !previousOn);
        console.log(`Sound has changed to ${sound}`);
    };

    return (
        <button onClick={toggleSound}>
            Sound: {sound ? 'ON': 'OFF'}
        </button>
    );
};

export default ClickToggle;