import React, {useEffect, useState} from 'react';
import VideoOnMobile from '../assets/video_mobile.mp4';
import VideoOnDesktop from '../assets/video_desktop.mp4';
import Countdown from "./Countdown";
import Sound from "./Sound";

function Main() {

    const [width, setWidth] = useState(window.innerWidth);
    useEffect( () => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);


    const [mute, setMute] = useState(true)

    function LetMeHear() {
        setMute(!mute);
    }

    if (width >= 426) {
        return (
            <div className='main'>
                <Sound props={LetMeHear}/>
                <video src={VideoOnDesktop} autoPlay loop muted={mute}/>
                <Countdown />
            </div>
        );
    } else {
        return (
            <div className='main'>
                <Sound props={LetMeHear}/>
                <video src={VideoOnMobile} autoPlay loop muted={mute}/>
                <Countdown />
            </div>
        );
    }
}

export default Main;
