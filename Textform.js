import React, {useState} from 'react'

export default function Textform(props) {

    const[text, setText]= useState('Enter your Text')
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
   
  //   const speak = () => {
  //     let msg = new SpeechSynthesisUtterance(text);
  //     window.speechSynthesis.speak(msg);
  //     const toogle = document.getElementById('toggle')
  //     if (toogle.textContent == "Speak") {
  //         toogle.innerHTML = "Stop"
  //     }
  //     else {
  //         toogle.innerHTML = "Speak"
  //         if (toogle.innerHTML = "Speak"){
  //             window.speechSynthesis.cancel()
  //         }
  //     }
  // }
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
  return (
    <div>
    
<div className="mb-3">
    <h3>{props.heading}</h3>
  <textarea className="form-control my-3" id="mybox" onChange={handleChange} value={text} rows="8"></textarea>
    <button className='btn btn-primary my-3 mx-3' onClick={handleClearClick}>Clear Text </button>
  <button className='btn btn-primary my-3' onClick={handleUpClick}>Convert to Uppercase </button>
  <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Convert to Lowercase </button>
  {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button> */}




</div>

<div className='conatiner my-3'>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p> {0.08 * text.split(" ").length }</p>
<h3>Text Preview</h3>
<p>{text}</p>
</div>
    </div>
  )
}
