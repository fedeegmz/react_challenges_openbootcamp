import React, { useState } from 'react';

const Square = () => {

    const [colorComponent, setColorComponent] = useState("black");
    const [isLocked, setIsLocked] = useState(false);
    const [intervalID, setIntervalID] = useState();
    

    function randomColor() {
        console.log("Change background color");

        if (!isLocked) {
            let randomR = Math.floor(Math.random() * 256);
            let randomG = Math.floor(Math.random() * 256);
            let randomB = Math.floor(Math.random() * 256);
            let id = setInterval(setColorComponent(`rgb(${randomR},${randomG},${randomB})`), 3000);
            setIntervalID(id);
        } else {
            console.log("Locked component");
        }
    }

    function stopRandomColor() {
        console.log("Stop");

        clearInterval(intervalID);
    }

    function lockUnlock() {
        console.log("Lock or Unlock the component color");

        setIsLocked(!isLocked);
    }


    return (
        <div
            style={{width: "255px", height: "255px", backgroundColor: colorComponent}}
            onMouseMove={randomColor}
            onMouseOut={stopRandomColor}
            onDoubleClick={lockUnlock}
        >
            
        </div>
    );
}

export default Square;
