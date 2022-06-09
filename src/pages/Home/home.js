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

    // const voteQuestion = async (questionId, voteType) => {
    //     console.log('vote question', questionId, voteType)
    //     setQuestions(prevQuetions => {
    //         const valueVoteType = (voteType === "voteUp") ? 1 : - 1
    //         const newQuestions = prevQuetions.map(q => {
    //             if (q._id !== questionId) return q;

    //             return {
    //                 ...q,
    //                 vote: q.vote + valueVoteType
    //             }
    //         })
    //         return newQuestions;
    //     })
    //     const res = await axios({
    //         url: `http://localhost:8080/api/questions/${questionId}/${voteType}`,
    //         method: 'PUT'
    //     })
        
    // }

    const renderQuestions = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }

        return questions.map(q => {

            return (
                <div className='lq-list-item' key={q._id}>
                    <div className='lq-list-item-value'>
                        <div className='lq-list-item-vote'><p>{q.vote}</p><p className='text-votes'>votes</p>
                            {/* <button onClick={() => voteQuestion(q._id, 'voteUp')}>vote up</button>
                            <button onClick={() => voteQuestion(q._id, 'voteDown')}>vote down</button> */}
                        </div>
                        <div className='lq-list-item-vote'><p>{q.answerCount}</p><p className='text-votes'>answers</p></div>
                    </div>
                    <div className='lq-list-item-body'>
                        <div className='lq-list-item-title'><p>{q.title}</p></div>
                        <div className='lq-list-item-description'><p>{q.description}</p></div>
                        <div className='lq-list-item-tags'>{renderTags(q.tags)}</div>
                    </div>
                </div>
            )
        })
    }

    const renderTags = (tag) => {
        return tag.map(t => {
            return (
                <button className='tag-button'>{t}</button>
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
                    <input className='head-search-input' type={"search"} placeholder="   Search the question"></input>
                </form>
                <a href='#' className='head-login'><button className='btn-head login'>Login</button></a>
                <a href='#' className='head-signUp'><button className='btn-head signUp'>Sign up</button></a>
            </div>
            <div className='body'>
                <div className='quickAccess'>
                    <ol className='quickAccess-ol'>
                        <li className='qa-home'>
                            <a href='#'>
                                <div className='qa-text'>Home</div>
                            </a>
                        </li>
                        <li className='qa-public'>
                            <ol className='qa-public-ol'>
                                <li className='qa-public-title'>
                                    <div className='qa-text'>PUBLIC</div>
                                </li>
                                <li className='qa-public-item qa-public-item-active'>
                                    <a href='#'>
                                        <div className='qa-text'>Questions</div>
                                    </a>
                                </li>
                                <li className='qa-public-item'>
                                    <a href='#'>
                                        <div className='qa-text'>Tags</div>
                                    </a>
                                </li>
                                <li className='qa-public-item'>
                                    <a href='#'>
                                        <div className='qa-text'>Users</div>
                                    </a>
                                </li>
                                <li className='qa-public-item'>
                                    <a href='#'>
                                        <div className='qa-text'>Companies</div>
                                    </a>
                                </li>
                            </ol>
                        </li>
                        <li>
                            <img className='ad-img qa-img qa-img-1' src='https://cf.shopee.vn/file/29e31959305c132c92402cd9fdbe7dac'></img>
                            <img className='ad-img qa-img' src='https://3ss.vn/admin/sites/default/files/superadmin/2021_08_19/ok-1-1622453554.jpg'></img>
                        </li>
                    </ol>
                </div>
                <div className='listQuestion'>
                    <div className='lq-head'>
                        <div className='lq-head-title'><p className='lq-head-title-text'>All Questions</p></div>
                        <div className='lq-head-btn'><a href='#'><button className='lq-head-title-btn'>Ask question?</button></a></div>
                    </div>
                    <div className='lq-nav'>
                        <div className='lq-nav-questionCount'>1332764837 Questions</div>
                        <div className='lq-nav-navbar'>
                            <a href='#' style={{textDecoration: "none"}}>
                                <div className='lq-nav-navbar-item first'>Newest</div>
                            </a>
                            <a href='#' style={{textDecoration: "none"}}>
                                <div className='lq-nav-navbar-item'>Active</div>
                            </a>
                            <a href='#' style={{textDecoration: "none"}}>
                                <div className='lq-nav-navbar-item'>Unanswered</div>
                            </a>
                            <a href='#' style={{textDecoration: "none"}}>
                                <div className='lq-nav-navbar-item'>Most votes</div>
                            </a>
                        </div>
                    </div>
                    <div className='lq-list'>
                        {renderQuestions()}
                    </div>
                </div>
                <div className='advertise'>
                    <img className='ad-img adImg1' src='https://caia.vn/wp-content/uploads/2011/03/quang-cao-truyen-hinh.jpg'></img>
                    <img className='ad-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjXcsbOnf7p1dNJpuL7aykwGbZNe3__pA-joOwk5qG3L15gxe8vvuuMLYlgHk76uOaUk&usqp=CAU'></img>
                    <img className='ad-img' src='https://vinaad.vn/wp-content/uploads/2018/07/ap-phich-quang-cao-6-e1531123223501.jpg'></img>
                </div>
            </div>
        </div>
    )
}

export default Home