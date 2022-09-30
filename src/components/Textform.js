import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showalert("converted to upper case!","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleloClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showalert("converted to lower case!","success");
  }
  const handleToCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied!","success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/ + [ ] + /);
    setText(newText.join(" "))
    props.showalert("extra space has been removed!","success");
  }
  const handleClearClick = ()=>{
    let newText = ''
    setText(newText)
  }
  const [text,setText] = useState("");
  return (
    <>
    <div>
        <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#042743' }}>
        <label htmlFor="mybox" className="form-label"> {props.heading}</label>
        <textarea className='form-control' id="mybox" value={text} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} rows='8'></textarea>
        <button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>convert to upper case</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleloClick}>convert to lower case</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>clear text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleToCopy}>copy text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>remove extra handleExtraSpaces</button>
        </div>
    </div>
    <div className='container my-3' style={{color:props.mode === 'dark' ? 'white' : '#042743' }}>
      <h2>Enter text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "enter text in the textbox to preview"}</p>

    </div> 
    </>
  )
}
