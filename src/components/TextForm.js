import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearText=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed","success");
    }
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied to clipboard","success");
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'lightgrey':'white'}} onChange={handleOnChange} id="myBox" rows="8"/>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
