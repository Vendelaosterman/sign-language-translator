import { useLocation } from "react-router-dom";
import { useState} from 'react';

const Translation = (props) => {

    const receivedValue = props.userInput

    const generateAlphabet = () => {
        const alphabet = [];
        for (let i = 97; i <= 122; i++) {
          alphabet.push(String.fromCharCode(i));
        }
        return alphabet;
      };

    const alphabet = generateAlphabet();

    const displayImages = receivedValue.map((value, index) => {
        value = value.toLowerCase()
        return alphabet.includes(value) ? <img
            key={index}
            src={`/img/${value}.png`}
        /> : null
    })


    return (
        <>
            {displayImages}
        </>
    )
}

export default Translation