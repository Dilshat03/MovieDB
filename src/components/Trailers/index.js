import React, { useState} from 'react';
import ModalVideo from 'react-modal-video'


const Trailers = ({id}) => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>

            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />
            <button className="btn btn-danger mb-3" onClick={()=> setOpen(true)}>Play trailer  <i className='bx bx-movie-play'/></button>
        </>
    );
};

export default Trailers;