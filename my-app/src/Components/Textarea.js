import React,{useState} from 'react'

export default function Textarea(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text)
        alert("Copied to clipboard")
    }

    // const [mystyle,setMystyle] = useState({
    //   color : 'black',
    //   background : "white"
    // })

    // const [btntext,setbtnText] = useState('Enable Dark mode')
    // const togglestyle = ()=>{
    //   if (mystyle.color === 'black'){
    //     setMystyle({
    //       color : 'white',
    //       background : 'black',
    //       border : '2px solid white'
    //     })
    //     setbtnText("Enable Light mode");
    //   } 
    //   else {
    //     setMystyle({
    //       color : 'black',
    //       background : "white"
    //     })
    //     setbtnText("Enable Dark mode");

    //   }
    // }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'#6e6f75':'black'}}>
      <h1>{props.title}</h1>
      <div class="mb-3" >
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{color: props.mode === 'dark'?'black':'white', backgroundColor: props.mode === 'dark'?'grey':'white'}} ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>

    </div>
    <div className='container my-3' style={{color: props.mode === 'dark'?'#6e6f75':'black'}}>
        <h1>Your text summary</h1>
        
        
        <p>{text.split(' ').length} Words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
