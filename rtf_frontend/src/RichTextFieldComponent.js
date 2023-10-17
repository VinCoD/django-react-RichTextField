// RichTextFieldComponent.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextFieldComponent = ({ value, onChange }) => {
    const handleChange = (html) => {
        onChange(html);
    };

    return <ReactQuill value={value} onChange={handleChange} />;
};

export default RichTextFieldComponent;
