import React, {useState} from 'react';

function Sound({props}) {

    const [refresh, setRefresh] = useState(true)

    function handleClick() {
        if (typeof props === 'function') {
            setRefresh(!refresh);
            props();
        }
    }

    if (refresh) {
        return (
            <div className='sound-icon-container'>
                <i onClick={handleClick} className="fa-solid fa-volume-xmark sound-icons"></i>
            </div>
        )
    } else {
        return (
            <div className='sound-icon-container'>
                <i onClick={handleClick} className="fa-solid fa-volume-high sound-icons" ></i>

            </div>
        );
    }
}

export default Sound;
