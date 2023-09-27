import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
    return (
        <section className='container'>
            <h3>Questions</h3>
            {questions.map((question) => (
                <SingleQuestion key={question.id} {...question} />
            ))}
        </section>
    );
};

export default Questions;
