import React, {useEffect, useState} from 'react';
import VideoOnMobile from '../assets/video_mobile.mp4';
import VideoOnDesktop from '../assets/video_desktop.mp4';
import Countdown from "./Countdown";

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

    if (width >= 426) {
        return (
            <div className='main'>
                <video src={VideoOnDesktop} autoPlay loop muted/>
                <Countdown />
            </div>
        );
    } else {
        return (
            <div className='main'>
                <video src={VideoOnMobile} autoPlay loop muted/>
                <Countdown />
            </div>
        );
    }
}

export default Main;
