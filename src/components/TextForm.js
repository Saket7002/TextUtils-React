import React, {useState} from "react"



export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case","Success : ")

  }
  const handleLwclick = () => {
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to upper case","Success : ")

  }
  const handleRemoveclick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Converted to lower case","Success : ")

  }
  const handleCopy = () => {
    let Text = document.getElementById("mybox");
    Text.select();
    navigator.clipboard.writeText(Text.value);
    props.showAlert("All text were copied","Success : ")

  }
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("All extra spaces were removed","Success : ")

  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [Text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode === 'light'? 'black' : 'white'}}>
       <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" id="mybox" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'grey' : 'black',color: props.mode === 'light' ? 'white' : 'white' }} rows="3"></textarea>
       </div>
       <button 
            className="btn-btn-Primary mx-3" 
            onClick={handleUpclick} 
            style={{backgroundColor: props.mode === 'light'? 'blue' : 'aqua',color: props.mode === 'light' ? 'white' : 'black',
                    backgroundColor: props.mode1 === 'light'? 'blue' : 'black',color: props.mode1 === 'light' ? 'white' : 'white' }}>Convert To Upper Case
       </button>
       <button  
            className="btn-btn-Primary mx-3" 
            onClick={handleLwclick} 
            style={{backgroundColor: props.mode === 'light'? 'blue' : 'aqua',color: props.mode === 'light' ? 'white' : 'black', 
            backgroundColor: props.mode1 === 'light'? 'blue' : 'black',color: props.mode1 === 'light' ? 'white' : 'white' }}>Convert To Lower Case
       </button>
       <button 
            className="btn-btn-Primary mx-3" 
            onClick={handleRemoveclick} 
            style={{backgroundColor: props.mode === 'light'? 'blue' : 'aqua',color: props.mode === 'light' ? 'white' : 'black', 
            backgroundColor: props.mode1 === 'light'? 'blue' : 'black',color: props.mode1 === 'light' ? 'white' : 'white' }}>Clear All Text
       </button>
       <button 
            className="btn-btn-Primary mx-3" 
            onClick={handleCopy} 
            style={{backgroundColor: props.mode === 'light'? 'blue' : 'aqua',color: props.mode === 'light' ? 'white' : 'black', 
            backgroundColor: props.mode1 === 'light'? 'blue' : 'black',color: props.mode1 === 'light' ? 'white' : 'white' }}>Copes Text
       </button>
       <button 
            className="btn-btn-Primary mx-3" 
            onClick={handleExtraSpaces} 
            style={{backgroundColor: props.mode === 'light'? 'blue' : 'aqua',color: props.mode === 'light' ? 'white' : 'black', 
            backgroundColor: props.mode1 === 'light'? 'blue' : 'black',color: props.mode1 === 'light' ? 'white' : 'white' }}>Remove Extra Spacs
        </button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'? 'black' : 'white'}}>
       <h1 >Your Text Summary</h1>
       <p>{Text.split(" ").length} words and {Text.length} characters</p>
       <p>{0.08*Text.split(" ").length} Minutes Read</p>
       <h2>Preview</h2>
       <p>{Text}</p>
    </div>
    </>
  )
}
