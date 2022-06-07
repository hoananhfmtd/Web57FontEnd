import "./Question.css";
import React from "react";

function Question() {
  const navbarHandle = () => document.querySelector('.offcanvas-collapse').classList.toggle('open')
  
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Question & Anwser</a>
            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation" onClick={()=>{navbarHandle()}}>
              <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
  
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        
        
        <main className="container">
          <div className="d-flex align-items-center  p-3 my-3 text-white bg-purple rounded shadow-sm">
            {/* <img className="me-3" src="../assets/brand/bootstrap-logo-white.svg" alt="" width="48" height="38"></img> */}
            <div className="lh-1">
              <h1 className="tt1">TITLE</h1>
              <small>Content</small>
            </div>
          </div>
      
        
          <div className="my-3 p-3 bg-body rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0">Suggestions</h6>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">date</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
              <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">date</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">date</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">date</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
            <div className="d-flex text-muted pt-3">
              <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"/><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        
              <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a href="#">date</a>
                </div>
                <span className="d-block">@username</span>
              </div>
            </div>
          </div>
        </main></>
    );
  }

  

  
  export default Question;
  