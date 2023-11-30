// /components/appContainer/QRCodeGenerator.jsx
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./qr.css";
import "../../css/bootstrap.min.css";

function QRCodeGenerator() {
    const [inputText, setInputText] = useState('');
    const [selectedType, setSelectedType] = useState('text');

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
        setInputText('');
    };

    const renderOptions = () => {
        const options = [
            { value: 'text', label: 'Text', icon: null },
            { value: 'bitcoin', label: 'Bitcoin Address', icon: 'https://cdn.acroford.com/icons/bitcoin.svg' },
            { value: 'twitter', label: 'Twitter Account', icon: null },
            { value: 'vcard', label: 'vCard', icon: null },
            { value: 'url', label: 'URL', icon: null },
        ];

        return (
            <div className="row">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`col-sm-3 option ${selectedType === option.value ? 'selected' : ''}`}
                        onClick={() => handleTypeChange({ target: { value: option.value } })}
                    >
                        {option.icon && <img src={option.icon} alt={option.label} className="icon" />}
                        <br /> {/* New line */}
                        {option.label}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {renderOptions()}
            <QRCode value={inputText} />
        </div>
    );
}

export default QRCodeGenerator;