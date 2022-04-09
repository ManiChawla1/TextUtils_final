import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here")


  return (
   <>
<div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
<div className="mb-3 my-5">
    <h2 className='my-2'>{props.heading}</h2>
    <textarea className="form-control" style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?"#20364d":"white"}} value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button type="button" onClick={handleUpClick} className="btn btn-primary my-1 mx-1">Convert to upperCase</button>
  <button type="button" onClick={handleLoClick} className="btn btn-primary my-1 mx-1">Convert to LowerCase</button>
</div>
<div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s/).filter(element=>element.length!==0).length} words and {text.length} characters</p>
    <p>{0.008*text.split(/\s/).filter(element=>element.length!==0).length} minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
   </>
  )
}
