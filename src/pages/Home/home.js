import './home.css'
import React from "react"
import axios from 'axios';

function Home() {
    // ham nay sau khi render
    const [isLoading, setIsLoading] = React.useState(true);
    const [questions, setQuestions] = React.useState([]);

    const fetchQuestions = async () => {
        setIsLoading(true);

        try {
            const res = await axios({
                url: 'http://localhost:8080/api/questions',
                method: 'GET'
            })
            setIsLoading(false);
            if (res.data.success) {
                setQuestions(res.data.data);
            }
        } catch (err) {
            setIsLoading(false);
        }
    }
    React.useEffect(() => {
        fetchQuestions()
    }, []);

    console.log(questions)

    const voteQuestion = async (questionId, voteType) => {
        console.log('vote question', questionId, voteType)
        setQuestions(prevQuetions => {
            const valueVoteType = (voteType === "voteUp") ? 1 : - 1
            const newQuestions = prevQuetions.map(q => {
                if (q._id !== questionId) return q;

                return {
                    ...q,
                    vote: q.vote + valueVoteType
                }
            })
            return newQuestions;
        })
        const res = await axios({
            url: `http://localhost:8080/api/questions/${questionId}/${voteType}`,
            method: 'PUT'
        })
        
    }

    const renderQuestions = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }

        return questions.map(q => {
            return (
                <div className='lq-list-item' key={q._id}>
                    <div className='lq-list-item-title'><p>{q.title}</p></div>
                    <div className='lq-list-item-description'><p>{q.description}</p></div>
                    <div className='lq-list-item-tags'><button>{q.tags[0]}</button></div>
                    <div className='lq-list-item-vote'><p>{q.vote}</p>
                        <button onClick={() => voteQuestion(q._id, 'voteUp')}>vote up</button>
                        <button onClick={() => voteQuestion(q._id, 'voteDown')}>vote down</button>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='home'>
            <div className='header'>
                <a href='#' className='head-logo'><p>MindX Questions</p></a>
                <a href='#' className='head-item'><p>About us</p></a>
                <a href='#' className='head-item'><p>Products</p></a>
                <a href='#' className='head-item'><p>For Teams</p></a>
                <form className='head-search-form'>
                    <input className='head-search-input' type={"search"} placeholder="     Search the question"></input>
                </form>
                <a href='#' className='head-login'><button className='btn-head login'>Login</button></a>
                <a href='#' className='head-signUp'><button className='btn-head signUp'>Sign up</button></a>
            </div>
            <div className='body'>
                <div className='quickAccess'>
                </div>
                <div className='listQuestion'>
                    <div className='lq-head'>
                        <div className='lq-head-title'><p className='lq-head-title-text'>All Questions</p></div>
                        <div className='lq-head-btn'><a href='#'><button className='lq-head-title-btn'>Ask question?</button></a></div>
                    </div>
                    <div className='lq-nav'>
                        <div>1332764837 Questions</div>
                    </div>
                    <div className='lq-list'>
                        {renderQuestions()}
                    </div>
                </div>
                <div className='advertise'>adv</div>
            </div>
        </div>
    )
}

export default Home