import React,{useState}from 'react'

export default function TexForm(props) {
  const handleupclick=()=>{
    console.log("Uppercase was clicked");
    setText("you have clicked on handleupclicked"+ text)
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleloclick=()=>{
    console.log("Lowercase was clicked");
    setText("you have clicked on handleloclicked"+ text)
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclear=()=>{
    console.log("cleared");
    setText("you have clicked on handleclear"+ text)
    let newText = "";
    setText(newText);
  }
  
  
  const handleonchange=(value)=>{
    console.log("onchange")
    setText(event.target.value);
  }
  
  const [text, setText] = useState('enter text here');
  // setText("new text");
  return (
    <div>
       <h1>{props.heading}</h1>
      
<div className="mb-3">
  <label for="mybox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleonchange}id="mybox" rows="8"></textarea>
  <div className='container my-3'><h3>Your text is analyzed</h3>
  <p>{text.split(" ").length} words and {text.length} characters</p> 
  <p>{0.008*text.split(" ").length} minutes </p></div>
  <button  className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>
  <button  className="btn btn-primary" onClick={handleloclick}>convert to lowercase</button> 
  <button  className="btn btn-primary" onClick={handleclear}>Clear</button>

  <h3>Preview</h3>
    <p>{text}</p>
</div>

    </div>
  )
}
