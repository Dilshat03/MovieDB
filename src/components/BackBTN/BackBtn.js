import React from 'react';
import {useHistory} from "react-router-dom";

const BackBtn = () => {
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }
    return (
        <div className='mb-5'>
            <button onClick={handleBack} className='btn btn-outline-warning '>Back</button>
        </div>
    );
};

export default BackBtn;