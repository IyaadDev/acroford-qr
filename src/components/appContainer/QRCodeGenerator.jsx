// /components/appContainer/QRCodeGenerator.jsx
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./qr.css";
import "../../css/bootstrap.min.css";
import GenerateWithText from './types/Text';
import Crypto from './types/Crypto';

function QRCodeGenerator() {
    const [selectedType, setSelectedType] = useState('text');

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const renderOptions = () => {
        const options = [
            { value: 'text', label: 'Text', icon: 'https://cdn.acroford.com/icons/text.png' },
            { value: 'bitcoin', label: 'Bitcoin Address', icon: 'https://cdn.acroford.com/icons/bitcoin.png' },
            { value: 'twitter', label: 'Twitter Account', icon: 'https://cdn.acroford.com/icons/twitter.png' },
            { value: 'vcard', label: 'vCard', icon: 'https://cdn.acroford.com/icons/vcard.png' },
            { value: 'url', label: 'URL', icon: 'https://cdn.acroford.com/icons/url.png' },
        ];

        return (
            <div className="row center">
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={`col-sm-3 option ${selectedType === option.value ? 'selected' : ''}`}
                        onClick={() => handleTypeChange({ target: { value: option.value } })}
                    >
                        {option.icon && <img src={option.icon} alt={option.label} className="icon" />}
                        <br /> {/* New line */}
                        {option.label}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div>
            {selectedType === 'text' ? <GenerateWithText /> : null}
            {renderOptions()}
            <Crypto />
        </div>
    );
}

export default QRCodeGenerator;