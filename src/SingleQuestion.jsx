import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info }) => {
    return (
        <article>
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
