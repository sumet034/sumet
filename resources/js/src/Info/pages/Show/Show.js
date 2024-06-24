import React from 'react';
import { useParams } from 'react-router-dom';
const Show = () => {
    let { topicId } = useParams();

    return (
        <div>
            <h1 className='text-xl animate-bounce text-center'>this is page Show</h1>
        </div>
    );
}

export default Show;
