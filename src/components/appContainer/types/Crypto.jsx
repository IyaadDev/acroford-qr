import OutputGen from "../Output";
import { useState } from "react";
import "./crypto.css";

function Crypto() {
    const [cryptoType, setCryptoType] = useState('Bitcoin');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleCryptoTypeChange = (e) => {
        setCryptoType(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleDownloadClick = () => {
        // Logic for download
    };

    const handlePasteClick = () => {
        navigator.clipboard.readText().then((text) => {
            setAddress(text);
        });
    };

    return (
        <div className="qrGenContainer">
                <div className="textInput container">
                    <select className="cryptoTypeSelect" value={cryptoType} onChange={handleCryptoTypeChange}>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Bitcoin Cash">Bitcoin Cash</option>
                        <option value="Ether">Ether</option>
                        <option value="Litecoin">Litecoin</option>
                        <option value="Dash">Dash</option>
                    </select>
                    <li className="cryptoOptions">
                    <input className="qrGenInput" placeholder="Amount" type="text" value={amount} onChange={handleAmountChange} />
                    <input className="qrGenInput" placeholder="Address" type="text" value={address} onChange={handleAddressChange} />
                    <input className="qrGenInput" placeholder="Message (optional)" type="text" value={message} onChange={handleMessageChange} />
                    </li>
                  <button className="pasteIcon" onClick={handlePasteClick}>
                        <img src="https://cdn.acroford.com/icons/paste.png" alt="Paste" />
                    </button>
            </div>
            <OutputGen
                cryptoType={cryptoType}
                amount={amount}
                address={address}
                message={message}
                handleDownloadClick={handleDownloadClick}
                handlePasteClick={handlePasteClick}
                handleCryptoTypeChange={handleCryptoTypeChange}
                handleAmountChange={handleAmountChange}
                handleAddressChange={handleAddressChange}
                handleMessageChange={handleMessageChange}
            />
        </div>
    );
}

export default Crypto;