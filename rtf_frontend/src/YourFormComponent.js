// YourFormComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import RichTextFieldComponent from './RichTextFieldComponent';

const YourFormComponent = () => {
    const [richTextValue, setRichTextValue] = useState('');
    // const [otherValue, setOtherValue] = useState('');

    const handleRichTextChange = (value) => {
        setRichTextValue(value);
    };

    // const handleOtherValueChange = (event) => {
    //     setOtherValue(event.target.value);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/your-models/', {
                rich_text_field: richTextValue,
                // other_field_1: otherValue,
            });

            console.log('Data submitted:', response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <RichTextFieldComponent value={richTextValue} onChange={handleRichTextChange} />
            {/*<input type="text" value={otherValue} onChange={handleOtherValueChange} />*/}
            <button type="submit">Submit</button>
        </form>
    );
};

export default YourFormComponent;
