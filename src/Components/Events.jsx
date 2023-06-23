import React from 'react';
import { useEffect, useState } from 'react';

//Normal Event
function Events() {
    const handleClick = () => {
        console.log('Button was clicked!');
    }
    const handleClick1 = (text) => {
        console.log(text);
    }

    return (
        <div style={{ marginTop: 50 }}>
            <h1>React Events</h1>
            <p>Welcome to handling user interactions in React.</p>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={() => handleClick1('Button1 was clicked!')}>Click me!</button>
            <hr></hr>
            <h4>Current Date and Time</h4>
            <Date1 />
            <hr></hr>
            <h4>Arrow functions to bind event handlers</h4>
            <ClickExample />
            <hr/>
            <h4>Prevent Default Browser Behavior</h4>
            <FormExample />
            <hr/>
            <h4>Use event.stopPropagation() to Stop Event Bubbling</h4>
            <ButtonExample/>
        </div>
    );
}


export default Events;


//Date demo
function Date1() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setTime(new Date());
        });
    }, []);

    return (
        <div>
            <p>The current time is: {time.toString()}</p>
        </div>
    );
}

//Arrow functions to bind event handlers
function ClickExample() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Arrow functions to bind event handlers</button>
        </>
    )
}

//Use event.preventDefault() to Prevent Default Browser Behavior

function FormExample() {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name Submitted");
    };
    return (
        <>
            <form onClick={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

//Use event.stopPropagation() to Stop Event Bubbling

function ButtonExample() {
    const handleClick = (e) => {
        e.stopPropagation();
        console.log("Button Clicked");
    };

    const handleDivClick = () => {
        console.log("div clicked");
    };
    return (
        <>
            <div className='wrapper p-5' onClick={handleDivClick} style={{ marginBottom: 50,color:'blue',backgroundColor:'grey' }}>
                <button onClick={handleClick}>Click me!!!</button>
            </div>
        </>
    )
}


