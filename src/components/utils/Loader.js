import React from 'react';
import ReactLoading from 'react-loading';

const Loader = props => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <ReactLoading type={"bars"} color={'#ff6da2'} height={'20%'} width={'20%'} />
        </div>     
    )
}

export default Loader;