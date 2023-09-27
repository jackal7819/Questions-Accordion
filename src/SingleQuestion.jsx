import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useState } from 'react';

const SingleQuestion = ({ id, title, info }) => {
    const [showInfo, setShowInfo] = useState(false);
    
    return (
        <article className='question'>
            <header>
                <h5>
                    {id}. {title}
                </h5>
            </header>
            <p>{info}</p>
        </article>
    );
};
export default SingleQuestion;
