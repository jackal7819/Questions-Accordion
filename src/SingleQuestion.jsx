import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { useState } from 'react';

const SingleQuestion = ({ id, title, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <article className='question'>
            <header>
                <h5>
                    {id}. {title}
                </h5>
                <button className='question-btn' onClick={toggleShowInfo}>
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            <p>{showInfo && info}</p>
        </article>
    );
};

export default SingleQuestion;
