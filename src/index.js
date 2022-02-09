import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const data = [
    {
        id: 512,
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: 787,
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }
];

ReactDOM.render(
    <div id="container">
        <b>People</b>
        {data.map(e =>
            <div id="para">
                <p id="name"><b>{e.name}</b></p>
                <p id="email">{e.email}</p>
                <p id="phone">{e.phone}</p>
            </div>
        )}
    </div>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
