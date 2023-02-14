import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let nextText = text.toUpperCase();
    setText(nextText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let nextText = text.toLowerCase();
    setText(nextText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    let nextText = "";
    setText(nextText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleCopy = () => {
    let nextText = document.getElementById("myBox");
    nextText.select();
    nextText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(nextText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let nextText = text.split(/[ ]+/);
    setText(nextText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking.....!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "new text";   //wrong way to change the state
  //   setText("set text"); //right way to change the state
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#030a39",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#030a39",
            }}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
        <button
          //   type="submit"
          className="btn btn-warning mx-2 my-2"
          onClick={speak}
        >
          Speak
        </button>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "#030a39",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
