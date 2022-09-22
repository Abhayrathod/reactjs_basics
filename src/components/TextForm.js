import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUPClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) =>{
        // console.log("Uppercase was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the text here");
    // text = "abdghfbh"       wrong way
    // setText("this is right")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' row="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUPClick}>Convert to Uppercase</button>
        </div>
    )
}
