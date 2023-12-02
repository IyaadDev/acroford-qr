import QRCode from "qrcode.react";

function OutputGen ({inputText, handleDownloadClick, handlePasteClick, handleInputChange}) {
    return (
        <div className="result">
        <QRCode className="qrCode" size="256" value={inputText} /><br />
        <button className="downloadBtn" onClick={handleDownloadClick}>Download</button>
    </div>
    );
}

export default OutputGen;