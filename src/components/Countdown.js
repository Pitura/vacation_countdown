import React, {useEffect, useState} from 'react';

function Countdown() {

    const eventDate = new Date('11 sep 2022 21:20');

    const [present, setPresent] = useState(new Date());

    useEffect( () => {
        const interval = setInterval( () => {
            setPresent(new Date())
        }, 1_000);
        return () => clearInterval(interval);
    },[])

    const timeLeft = (eventDate - present) / 1000;

    const days = Math.floor(timeLeft / 3600 / 24);
    const hours = Math.floor(timeLeft / 3600) % 24;
    const minutes = Math.floor(timeLeft / 60) % 60;
    const seconds = Math.floor(timeLeft) % 60;

    function timeFormat(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className='counter'>
            <div className='container'>
                <h1 className='title'>Tunisia welcome to in:</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><span className='timer'>{timeFormat(days)}</span></td>
                            <td><span className='timer'>{timeFormat(hours)}</span></td>
                            <td><span className='timer'>{timeFormat(minutes)}</span></td>
                            <td><span className='timer'>{timeFormat(seconds)}</span></td>
                        </tr>
                        <tr>
                            <td><span className='description'>Days</span></td>
                            <td><span className='description'>Hours</span></td>
                            <td><span className='description'>Minutes</span></td>
                            <td><span className='description'>Seconds</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Countdown;
