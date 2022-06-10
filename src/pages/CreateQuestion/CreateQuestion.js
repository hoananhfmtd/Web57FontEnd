import React from "react";
import axios from "axios";
import "./DetailQuestion.css";
import { TagsInput } from "react-tag-input-component";

function Question({ user }) {
  const [title, setTitle] = React.useState("");
  const [description, setdescription] = React.useState("");
  const [error, setError] = React.useState("");
  const [tags, setTags] = React.useState([]);

  const onChangeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };
  const onChangeQuestion = (e) => {
    const value = e.target.value;
    setdescription(value);
  };
  const submitForm = async (e) => {
 
    e.preventDefault();

    try {
      const res = await axios({
        url: "http://localhost:9000/api/questions",
        method: "POST",
        data: { title, description, tags },
      });
      if (res.data.success) {
        alert("Create question successful");
        setTitle("");
        setdescription("");
      } else {
        setError(res.data.data);
      }
    } catch (err) {
      setError("loi roi");
    }
  };

 
  return (
    <div>
         <div className='header'>
                <a href='#' className='head-logo'><p>MindX Questions</p></a>
                <a href='#' className='head-item'><p>About us</p></a>
                <a href='#' className='head-item'><p>Products</p></a>
                <a href='#' className='head-item'><p>For Teams</p></a>
               
                { user ? (
                    <button className='btn-head login' onClick={() => {
                        localStorage.removeItem('user');
                        window.location.href = '/login'
                    }}>Logout</button>
                ) : (
                    <>
                        <a href='/login' className='head-login'><button className='btn-head login'>Login</button></a>
                        <a href='/signup' className='head-signUp'><button className='btn-head signUp'>Sign up</button></a>
                    </>
                )}
               
            </div>
    <div className="form__addQuestion">
      <form className="form__Question" onSubmit={(e) => e.preventDefault()}>
        <div className="header__Question">
         
          <h3>Title</h3>
          <input
            className="form-controll"
            value={title}
            onChange={onChangeTitle}
            placeholder="Input your question"
          ></input>
        </div>
        <div className="body__Question">
          <h3>Question</h3>
          <p>
            Include all the information someone need to answer your question
          </p>
          <textarea
            className="text_area"
            value={description}
            onChange={onChangeQuestion}
            rows="5"
            cols="52"
          >
            Bạn đang xem tag html textarea, là text có thể nhập được văn bản, và
            có thể chứa rất nhiều dòng...
          </textarea>
        </div>
        <div className="footer__Question">
          <h3>Tags</h3>
         
          <TagsInput
        value={tags}
        onChange={setTags}
        name="fruits"
        placeHolder="enter fruits"
      />
          <button className="Add_Question" label="Add Question" onClick={submitForm}>
            <p>Add question</p>
          </button>
        </div>
      </form>
    </div>
    
    </div>
  );
}
export default Question;
