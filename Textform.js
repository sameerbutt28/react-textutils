import React, {useState} from 'react'

export default function Textform(props) {

    const[text, setText]= useState('Enter your text in textarea to manipulate or transform yout text')
   const handleUpClick= ()=>
    {
        console.log('You clicked the button')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick= ()=>
    {
        console.log('You clicked the button')
        let newText = text.toLowerCase();
        setText(newText)
    }
   
  
    const handleClearClick= ()=>
    {
        console.log('You clicked the button')
        let newText ='';
        setText(newText)
    }
    const handleChange= (event)=>
    {
        console.log('Somoone is trying to change the text.')
        setText(event.target.value)
    }
    const handleCopy=()=>
    {
      var text = document.getElementById('mybox')
      text.select();
navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces= ()=>
    {
let newText = text.split(/[ ]+/);
setText(newText.join(" "));
    }
  return (
    <div>
    
<div style={{ color: props.mode === 'dark' ? 'white' : 'black'}} className=" container mb-3">
    <h3 >  {props.heading}</h3>
  <textarea className="form-control my-3" id="mybox" onChange={handleChange} value={text} rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}} ></textarea>
    <button  className='btn btn-primary my-3 mx-3' onClick={handleClearClick}>Clear Text </button>
  <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase </button>
  <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Convert to Lowercase </button>
  <button className='btn btn-primary my-3 ' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-primary my-3 mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>






</div>

<div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p> {0.08 * text.split(" ").length }</p>
<h3>Text Preview</h3>
<p>{text}</p>
</div>
    </div>
  )
}
