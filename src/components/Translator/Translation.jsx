import { useLocation } from "react-router-dom";
import { useState} from 'react';
import DisplayImages from '../SharedComponents/DisplayImages';

const Translation = (props) => {

    const receivedValue = props.userInput

    return (
        <>
            {DisplayImages(receivedValue)}
        </>
    )
}

export default Translation