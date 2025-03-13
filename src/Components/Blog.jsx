import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div>
      <div className="icongf">
      <a href='/'><i className="fa-solid fa-arrow-left fa-xl" style={{color:"white"}}></i></a>
      </div>
      <br />
        <div className="blog">
          Blog
        </div>
        <section className='line'></section>
        <br />
        <div className="blog1">
          <div className="admin-details">
          <div className="admin-pic">
            <img src="https://avatars.githubusercontent.com/u/153583229?v=4" alt="Tarak" style={{height:"100%",width:"100%",borderRadius:"50%"}}/>
          </div>
          <div className="admin-name">Taraka <span style={{fontSize:"16px",color:"blue"}}>@admin</span></div>
          </div>
          <br />
          <div className="admin-msg">
            Make sure to follow my Github account
          </div>
          <p>Link 🔗: <a href="/https://github.com/TarakaYalakala">https://github.com/TarakaYalakala</a></p>
        </div>

        <div className="end">No more blogs ➜</div>
    </div>
  )
}

export default Blog