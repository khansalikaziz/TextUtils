import React, { useState } from "react";

export default function TextForm(props) {
  let emailText = "";
  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase!", "success");
  };
  //Email Extractor
  function handleEmail() {
    let arr = text.split(" ");

    arr.forEach((element) => {
      if (element.includes("@") && element.includes(".com")) {
        emailText += element + " ";
      }
    });
    props.showAlert("Email extraction successfull!", "success");
    setText(emailText);
  }
  const handleDownclick = () => {
    props.showAlert("Converted to LowerCase!", "success");
    setText(text.toLocaleLowerCase());
  };
  const handleOnchange = (event) => {
    setText(event.target.value);
    handleSentence();
  };
  const handleClearText = () => {
    props.showAlert("Successfully cleared the text!", "success");
    setText(text.replace(text, ""));
  };
  //Copy text
  const handleCopy = () => {
    var text1 = document.getElementById("myBox");
    text1.select();
    props.showAlert("Copied to Clipboard!", "success");
    navigator.clipboard.writeText(text1.value);
  };
  //Handle Extra spaces
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    props.showAlert("Removed All extraspaces!", "success");
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");

  let count = 0;
  const [num, setNum] = useState("");
  const handleSentence = () => {
    for (let i = 0; i < text.length; i++) {
      if (
        text.charAt(i) === "?" ||
        text.charAt(i) === "." ||
        text.charAt(i) === "!"
      ) {
        count += 1;
      }
    }
    count = "Sentence Count : " + count;
    setNum(count);
    console.log(count);
  };

  return (
    <div>
      <div
        className="mb-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="container my-3">
          <h1 className="my-2">{props.heading} </h1>
          <br />
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#696969",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            value={text}
            onChange={handleOnchange}
            rows="9"
          ></textarea>
          <br />

          <button
            disabled={text.length === 0}
            onClick={handleClearText}
            className="btn btn.primary mx-2"
            style={{
              color: "white",
              backgroundColor: props.theme,
              margin: "5px",
            }}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleEmail}
            className="btn btn.primary mx-2"
            style={{
              color: "white",
              backgroundColor: props.theme,
              margin: "5px",
            }}
          >
            Email Extractor
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleCopy}
            className="btn btn.primary mx-2"
            style={{
              color: "white",
              backgroundColor: props.theme,
              margin: "5px",
            }}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleExtraSpace}
            className="btn btn.primary mx-2"
            style={{
              color: "white",
              backgroundColor: props.theme,
              margin: "5px",
            }}
          >
            Remove Extra Space
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleUpclick}
            className="btn btn.primary mx-2"
            style={{
              color: "white",
              backgroundColor: props.theme,
              margin: "5px",
            }}
          >
            Convert to upper case
          </button>

          <button
            disabled={text.length === 0}
            onClick={handleDownclick}
            className="btn btn.primary mx-2"
            style={{
              color: "white",
              backgroundColor: props.theme,
              margin: "5px",
            }}
          >
            Convert to lower case
          </button>
        </div>
        <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p>
            {
              text.split(" ").filter((elem) => {
                return elem.length !== 0;
              }).length
            }{" "}
            words, {text.length} characters
          </p>
          <p>
            {text.split(" ").filter((elem) => {
              return elem.length !== 0;
            }).length * 0.008}{" "}
            Minutes to read
          </p>
          <p>{num}</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </div>
  );
}
