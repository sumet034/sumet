import React from 'react';
import { useParams } from 'react-router-dom';
const Show = () => {
    let { topicId } = useParams();

    return (
        <div className='h-screen'>
            <h1 className='text-xl animate-pulse text-center'>this is page Show</h1>
        </div>
    );
}

export default Show;
