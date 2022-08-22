import React, {useEffect, useState} from 'react';

function Countdown() {

    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    // wylot 11.09.2022 21:20

    return (
        <div className='counter'>
            <div className='container'>
                <h1>Tunisia wilkomen in:</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><h2>Days:</h2></td>
                            <td><h2>temp</h2></td>
                        </tr>
                        <tr>
                            <td><h2>Hours:</h2></td>
                            <td><h2>temp</h2></td>
                        </tr>
                        <tr>
                            <td><h2>Minutes:</h2></td>
                            <td><h2>temp</h2></td>
                        </tr>
                        <tr>
                            <td><h2>Seconds:</h2></td>
                            <td><h2>temp</h2></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Countdown;
