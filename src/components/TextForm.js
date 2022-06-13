import React,{useState} from "react";


export default function TextForm(props){
    let emailText="";
    const handleUpclick=()=>{
        
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase!","success");
        
    }
    //Email Extractor
    function handleEmail(){
        let arr=text.split(" ");
        
        arr.forEach(element => {
            if(element.includes("@") && element.includes(".com")){
                emailText+=element+" ";
            }
        });
        props.showAlert("Email extraction successfull!","success")
        setText(emailText);
    }
    const handleDownclick=()=>{
        props.showAlert("Converted to LowerCase!","success")
        setText(text.toLocaleLowerCase())
    }
    const handleOnchange=(event)=>{
        setText(event.target.value)
        handleSentence()
        
    }
    const handleClearText=()=>{
        props.showAlert("Successfully cleared the text!","success")
        setText(text.replace(text,""))
    }
    //Copy text
    const handleCopy=()=>{
        var text1=document.getElementById("myBox");
        text1.select();
        props.showAlert("Copied to Clipboard!","success")
        navigator.clipboard.writeText(text1.value)
    }
    //Handle Extra spaces
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        props.showAlert("Removed All extraspaces!","success")
        setText(newText.join(" "))
    }
    
    const [text,setText]=useState("");
    let n=text.length
    let n1=text.split(" ").length
    if(n==0){
        n1=0;
    }
    if(text.endsWith(" ")){
        n1=n1-1;
    }

    let count=0
    const [num,setNum]=useState("");
    const handleSentence=()=>{
        
     for(let i=0;i<text.length;i++){
        if(text.charAt(i)=='?' || text.charAt(i)=='.' || text.charAt(i)=='!'){
            count+=1;
        }
     }
     count="Sentence Count : "+count
     setNum(count)
     console.log(count)
    }
    

    return(
        <div>
            <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
            <div className="container my-3"> 
             <h1>{props.heading} </h1><br/>  
             <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#696969',color:props.mode==='light'?'black':'white'}} id="myBox" value={text} onChange={handleOnchange} rows="9"></textarea><br/>
             
             <button onClick={handleClearText} className="btn btn.primary mx-2" style={{color:'white', backgroundColor:props.theme,margin:'5px'}}>Clear Text</button>
             <button onClick={handleEmail} className="btn btn.primary mx-2" style={{color:'white', backgroundColor:props.theme,margin:'5px'}}>Email Extractor</button>
             <button onClick={handleCopy} className="btn btn.primary mx-2" style={{color:'white', backgroundColor:props.theme,margin:'5px'}}>Copy Text</button>
             <button onClick={handleExtraSpace} className="btn btn.primary mx-2" style={{color:'white', backgroundColor:props.theme,margin:'5px'}}>Remove Extra Space</button>
             <button onClick={handleUpclick} className="btn btn.primary mx-2" style={{color:'white', backgroundColor:props.theme,margin:'5px'}}>Convert to upper case</button>
             
             
             <button onClick={handleDownclick} className="btn btn.primary mx-2" style={{color:'white', backgroundColor:props.theme,margin:'5px'}}>Convert to lower case</button>
             
             
             </div>
             <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{n1} words, {text.length} characters</p>
                <p>{n1*0.008} Minutes to read</p>
                <p>{num}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
                
             </div>
            </div>
        </div>
    );
}