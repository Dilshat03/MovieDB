import React from 'react';
import {useHistory} from "react-router-dom";

const BackBtn = () => {
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }
    return (
        <div>
            <button onClick={handleBack} className='back-btn'>Back</button>
        </div>
    );
};

export default BackBtn;