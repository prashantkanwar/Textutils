import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpCase = () => {
        console.log("uppercase clicked");
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase successfully","success");
    }
    const handleLwCase =() => {
        console.log("You have clicked on lowercase");
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase successfully","success");
    }
    const handleClear =() =>{
        console.log("You have clicked on clear text");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared successfully","success");
    }
    const handleCopy =() =>{
        console.log("You have clicked on copy text");
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text selected successfully","success");
    }

    const handleExtraSpace =() =>{
        console.log("You have clicked on Extra Space");
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space successfully","success");
    }

    const handleOnChange =(event) => {
        console.log("On Changed");
        setText(event.target.value);
        
    }
    // Declare a new state variable, which we'll call "count"
    const [Text, setText] = useState('');
    return ( 
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLwCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{Text.split(" ").length} words and {Text.length} characters</p>
            <p>{0.008 *Text.split(" ").length} minutes read</p>
        </div>
        </>
    )
}
