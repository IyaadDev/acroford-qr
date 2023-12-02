import OutputGen from "../Output";
import { useState } from "react";

function GenerateWithText() {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleDownloadClick = () => {
        //Logic for download
    };

    const handlePasteClick = () => {
        navigator.clipboard.readText().then((text) => {
            setInputText(text);
        });
    };

    return (
        <div className="qrGenContainer">
            <div className='textI'>
            <div className="textInput container">
                <input className="qrGenInput" placeholder="Type some text... " type="text" value={inputText} onChange={handleInputChange} />
                <button className="pasteIcon" onClick={handlePasteClick}>
                    <img src="https://cdn.acroford.com/icons/paste.png" alt="Paste" />
                </button>
            </div>
            </div>
            <OutputGen inputText={inputText} handleDownloadClick={handleDownloadClick} handlePasteClick={handlePasteClick} handleInputChange={handleInputChange} />
        </div>
    );
}

export default GenerateWithText;